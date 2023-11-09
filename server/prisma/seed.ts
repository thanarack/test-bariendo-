import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockOrganizations = [
  {
    id: '7ee64938-727b-4f80-aa51-b68c70df29a1',
    name: 'google.com',
  },
  {
    id: 'abce6b12-997c-43df-aeb9-e0321e223669',
    name: 'twitter.com',
  },
  {
    id: 'a0194b26-8524-4c88-b1c1-176f23a0ad88',
    name: 'facebook.com',
  },
];

const mockDoctorType = [
  {
    id: 'e64cff0b-9141-4b32-90ca-1b14c5484d20',
    name: 'Cardiologist',
  },
  {
    id: '773ba98b-b071-4554-b04b-88d417bb93e8',
    name: 'Orthodontics',
  },
  {
    id: '1b4481b2-243e-4b9d-a51b-081a6a7aa883',
    name: 'Eye Specialist',
  },
];

const mockUserDoctor: any = [
  {
    id: 'c1eeb862-15d8-423a-86b2-00073a2c3e0c',
    email: 'doctor1@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'DOCTOR',
    first_name: 'Doctor Test 1',
    last_name: 'Yuri',
    doctorType: {
      connect: {
        id: mockDoctorType[0].id,
      },
    },
  },
  {
    id: 'cdc05df4-64f6-4c46-8912-5d466e5a0ba9',
    email: 'doctor2@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'DOCTOR',
    first_name: 'Doctor Test 2',
    last_name: 'Masan',
    doctorType: {
      connect: {
        id: mockDoctorType[1].id,
      },
    },
  },
  {
    id: 'ac82c269-af19-4b04-82d0-cc668e2752cf',
    email: 'doctor3@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'DOCTOR',
    first_name: 'Doctor Test 3',
    last_name: 'Rookie',
    doctorType: {
      connect: {
        id: mockDoctorType[2].id,
      },
    },
  },
];

const mockUserDoctorOrganizations = [
  {
    id: '4290dcc7-4376-4d29-b4d6-40a6bbc5e44b',
    organizations: {
      connect: {
        id: mockOrganizations[0].id,
      },
    },
    user: {
      connect: {
        id: mockUserDoctor[0].id,
      },
    },
  },
  {
    id: 'ab68893a-14fd-464f-94ae-3515a44c59fb',
    organizations: {
      connect: {
        id: mockOrganizations[1].id,
      },
    },
    user: {
      connect: {
        id: mockUserDoctor[0].id,
      },
    },
  },
  {
    id: 'a385d865-4855-446a-af64-45545c66b8d3',
    organizations: {
      connect: {
        id: mockOrganizations[2].id,
      },
    },
    user: {
      connect: {
        id: mockUserDoctor[0].id,
      },
    },
  },
  {
    id: '6696d62b-b090-4b90-82b2-0173bd760301',
    organizations: {
      connect: {
        id: mockOrganizations[2].id,
      },
    },
    user: {
      connect: {
        id: mockUserDoctor[1].id,
      },
    },
  },
  {
    id: 'c0f49c2f-a880-43aa-b849-9905fd7101dc',
    organizations: {
      connect: {
        id: mockOrganizations[1].id,
      },
    },
    user: {
      connect: {
        id: mockUserDoctor[2].id,
      },
    },
  },
];

const mockUserPatient: any = [
  {
    id: '6cbe5b96-2043-4683-9c39-bcfa86e40155',
    email: 'user1@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'PATIENT',
    first_name: 'User Test 1',
    last_name: 'Bank',
  },
  {
    id: '53f0d80e-319f-4dbe-93d5-818c65128a87',
    email: 'user2@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'PATIENT',
    first_name: 'User Test 2',
    last_name: 'Ter',
  },
  {
    id: 'a722098c-826b-4d32-8c0b-ec12b7d3b29d',
    email: 'user3@mail.com',
    password: '$2b$10$MYFj0gLjXgUwrg/HrNMqR.3vXXPlxTaMEgo2POyqJJeO1K3.lNoKa',
    role: 'PATIENT',
    first_name: 'User Test 3',
    last_name: 'Max',
  },
];

const mockUserPatientOrganizations: any = [
  {
    id: 'cb130e43-61aa-4261-a9ec-2a406518a806',
    organizations: {
      connect: {
        id: mockOrganizations[0].id,
      },
    },
    user: {
      connect: {
        id: mockUserPatient[0].id,
      },
    },
  },
  {
    id: '4b5b9188-a340-43f5-b5a8-3a2c570d90e2',
    organizations: {
      connect: {
        id: mockOrganizations[1].id,
      },
    },
    user: {
      connect: {
        id: mockUserPatient[1].id,
      },
    },
  },
  {
    id: 'f7c0dcce-38eb-4d03-beee-8727f3fa9a64',
    organizations: {
      connect: {
        id: mockOrganizations[2].id,
      },
    },
    user: {
      connect: {
        id: mockUserPatient[2].id,
      },
    },
  },
];

async function main() {
  // Mock doctor type
  for (const item of mockDoctorType) {
    await prisma.doctorType.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  // Mock organizations
  for (const item of mockOrganizations) {
    await prisma.organizations.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  // Mock doctors
  for (const item of mockUserDoctor) {
    await prisma.user.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  // Mock doctors organizations
  for (const item of mockUserDoctorOrganizations) {
    await prisma.userOrganizations.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  // Mock patient
  for (const item of mockUserPatient) {
    await prisma.user.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  // Mock patient organizations
  for (const item of mockUserPatientOrganizations) {
    await prisma.userOrganizations.upsert({
      where: { id: item.id },
      create: item,
      update: item,
    });
  }

  console.log('seed successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
