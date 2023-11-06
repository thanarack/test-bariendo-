import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { AppointmentRequest } from 'src/interface/appointment';
import { AppointmentService } from './appointment.service';
import {
  ITokenInfo,
  TokenInterceptor,
} from 'src/interceptor/token.incetceptor';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('book')
  @UseInterceptors(TokenInterceptor)
  async book(@Body() body: AppointmentRequest, @Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.appointmentService.bookSlot(body, userInfo);
  }

  @Get('list')
  @UseInterceptors(TokenInterceptor)
  async list(@Body() body: AppointmentRequest, @Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.appointmentService.getListAppointment(userInfo);
  }
}
