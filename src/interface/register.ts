import { Role } from './role';

export interface RegisterBody {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: Role;
  organizations: string[];
}
