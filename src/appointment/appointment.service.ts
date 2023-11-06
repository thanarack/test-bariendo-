import { Injectable, NotFoundException } from '@nestjs/common';
import { ITokenInfo } from 'src/interceptor/token.incetceptor';
import { AppointmentRequest } from 'src/interface/appointment';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async bookSlot(body: AppointmentRequest, userInfo: ITokenInfo) {
    const slot = await this.prisma.scheduleTime.findFirst({
      where: {
        id: body.slot_id,
      },
    });

    if (!slot) {
      throw new NotFoundException('Invalid slot');
    }

    if (slot.status !== 'AVAILABLE') {
      throw new NotFoundException('Slot not available');
    }

    let appointment;
    await this.prisma.$transaction(async () => {
      // Create new appointment
      appointment = await this.prisma.appointments.create({
        data: {
          schedule_time_id: body.slot_id,
          user_id: userInfo.user_id,
        },
      });

      // Update schedule to booked
      await this.prisma.scheduleTime.update({
        where: {
          id: body.slot_id,
        },
        data: {
          status: 'BOOKED',
        },
      });
    });

    return appointment;
  }

  async getListAppointment(userInfo: ITokenInfo) {
    const result = await this.prisma.appointments.findMany({
      where: {
        user_id: userInfo.user_id,
      },
      include: {
        scheduleTime: {
          include: {
            user: true,
          },
        },
      },
    });

    const resultWithOutPassword = result.map((item) => {
      const result = item;
      delete result?.scheduleTime?.user?.password;
      return result;
    });

    return resultWithOutPassword;
  }
}
