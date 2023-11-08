import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async getDoctorSchedule(user_id: string) {
    return this.prisma.appointments.findMany({ where: { user_id } });
  }
}
