import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { DoctorType, User } from '@prisma/client';
import { RegisterBody } from 'src/interface/register';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(body: RegisterBody): Promise<User> {
    const {
      password,
      email,
      role,
      organizations,
      first_name,
      last_name,
      doctor_type_id,
    } = body;

    // Generate Hash password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt) as string;

    let user;
    await this.prisma.$transaction(async () => {
      // Create new user
      user = await this.prisma.user.create({
        data: {
          email,
          password: hashPassword,
          role,
          first_name,
          last_name,
          doctor_type_id,
        },
      });

      // Map organizations
      const userOrganizations = [];
      for (const item of organizations) {
        userOrganizations.push({
          user_id: user.id,
          organizations_id: item,
        });
      }

      // Add user to organization
      await this.prisma.userOrganizations.createMany({
        data: userOrganizations,
      });
    });

    return user;
  }

  async findByEmail(email: string): Promise<User & { doctorType: DoctorType }> {
    const user = this.prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        doctorType: true,
      },
    });
    return user;
  }
}
