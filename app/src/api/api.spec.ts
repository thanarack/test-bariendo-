export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: 'PATIENT';
  organizations: string[];
}

export interface Login {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export interface LoginResponse {
  data: Login;
}

export interface Register {
  id: string;
}

export interface RegisterResponse {
  data: RegisterRequest & Register;
}

export interface Organization {
  id: string;
  name: string;
}

export interface OrganizationsResponse {
  data: Organization[];
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  doctorType: DoctorType;
}

export interface DoctorType {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  slot_start: string;
  user_id: string;
  doctor_id: string;
  created_at?: string;
  updated_at?: string;
  user: Omit<User, 'password'>;
  doctor: Omit<User, 'password'>;
}

export interface DoctorsResponse {
  data: User[];
}

export interface BookResponse {
  data: Book[];
}

export interface BookCrateResponse {
  data: Book;
}

export interface BookRequest {
  slot_start: string;
  doctor_id: string;
}

export interface BookListRequest {
  doctor_id?: string;
}

export interface BookListRecentRequest {
  role: string;
}