import { Role } from '@prisma/client';

export interface AppointmentRequest {
  slot_start: string;
  doctor_id: string;
}

export interface AppointmentListRequest {
  doctor_id: string;
}

export interface AppointmentListRecentRequest {
  role: Role;
}

export interface DoctorSlotListRequest {
  doctor_id: string;
}
