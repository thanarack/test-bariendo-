import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  Req,
  Query,
} from '@nestjs/common';
import {
  AppointmentListRecentRequest,
  AppointmentListRequest,
  AppointmentRequest,
  DoctorSlotListRequest,
} from 'src/interface/appointment';
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

  @Get('book/list')
  @UseInterceptors(TokenInterceptor)
  async list(@Query() query: AppointmentListRequest, @Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.appointmentService.getListAppointment(query, userInfo);
  }

  @Get('book/list/recent')
  @UseInterceptors(TokenInterceptor)
  async listRecent(
    @Query() query: AppointmentListRecentRequest,
    @Req() req: any,
  ) {
    const userInfo: ITokenInfo = req.user_info;
    return this.appointmentService.getListRecentAppointment(query, userInfo);
  }

  @Get('organizations')
  async organizations() {
    return this.appointmentService.getOrganizations();
  }

  @Get('doctor/list')
  @UseInterceptors(TokenInterceptor)
  async doctorList(@Req() req: any) {
    const userInfo: ITokenInfo = req.user_info;
    return this.appointmentService.getDoctorList(userInfo);
  }

  @Get('doctor/slot/list')
  @UseInterceptors(TokenInterceptor)
  async doctorSlotList(@Query() query: DoctorSlotListRequest) {
    return this.appointmentService.getDoctorSlotList(query);
  }
}
