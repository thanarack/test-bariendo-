import { Injectable, NotFoundException } from '@nestjs/common';
import { ITokenInfo } from 'src/interceptor/token.incetceptor';
import {
  AppointmentListRecentRequest,
  AppointmentListRequest,
  AppointmentRequest,
  DoctorSlotListRequest,
} from 'src/interface/appointment';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async bookSlot(body: AppointmentRequest, userInfo: ITokenInfo) {
    const slots = await this.prisma.appointments.count({
      where: {
        user_id: userInfo.user_id,
      },
    });
    if (slots > 24) {
      throw new NotFoundException('Maximum slot is 24');
    }

    const slot = await this.prisma.appointments.findFirst({
      where: {
        slot_start: body.slot_start,
        user_id: userInfo.user_id,
      },
    });
    if (slot) {
      throw new NotFoundException('Slot already booked');
    }

    let appointment;
    await this.prisma.$transaction(async () => {
      appointment = await this.prisma.appointments.create({
        data: {
          slot_start: body.slot_start,
          user_id: userInfo.user_id,
          doctor_id: body.doctor_id,
        },
      });
    });

    return appointment;
  }

  async getListAppointment(
    query: AppointmentListRequest,
    userInfo: ITokenInfo,
  ) {
    const result = await this.prisma.appointments.findMany({
      where: {
        user_id: userInfo.user_id,
      },
    });

    return result;
  }

  async getListRecentAppointment(
    query: AppointmentListRecentRequest,
    userInfo: ITokenInfo,
  ) {
    let where: any = {
      user_id: userInfo.user_id,
    };
    let include: any = {
      doctor: {
        include: {
          doctorType: true,
        },
      },
    };

    if (query.role === 'DOCTOR') {
      where = {
        doctor_id: userInfo.user_id,
      };
      include = {
        user: true,
      };
    }

    const result = await this.prisma.appointments.findMany({
      where: where,
      include: include,
      orderBy: {
        slot_start: 'asc',
      },
    });

    // remove password
    const mapBooked = result.map((item: any) => {
      delete item.doctor?.password;
      delete item.user?.password;
      return item;
    });

    return mapBooked;
  }

  async getOrganizations() {
    return await this.prisma.organizations.findMany();
  }

  async getDoctorList(userInfo: ITokenInfo) {
    // Get user organizations
    const userOrganizations = await this.prisma.userOrganizations.findMany({
      select: {
        organizations_id: true,
      },
      where: {
        user_id: userInfo.user_id,
      },
    });

    // Get users in organization
    const userInOrg = await this.prisma.userOrganizations.findMany({
      select: { user_id: true },
      where: {
        user_id: {
          not: userInfo.user_id,
        },
        organizations_id: {
          in: userOrganizations.map((item) => item.organizations_id),
        },
      },
    });

    // Get users
    const users = await this.prisma.user.findMany({
      where: {
        role: 'DOCTOR',
        id: {
          in: userInOrg.map((item) => item.user_id),
        },
      },
      include: { organizations: true, doctorType: true },
    });

    // Map user and remove password field
    const mapUser = users.map((item) => {
      const user = item;
      delete user?.password;
      return user;
    });

    return mapUser;
  }

  async getDoctorSlotList(query: DoctorSlotListRequest) {
    return query;
  }
}
