import { Controller, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('doctor/:id')
  async doctorSchedule(@Param() param: any) {
    return this.scheduleService.getDoctorSchedule(param.id);
  }
}
