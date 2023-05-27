import { PrismaClient } from '@prisma/client';
import { UserEntity, userRole, userStatus } from '../../domain/user-entity';
import { AuthRepository } from "../../domain/auth-repository"

const prisma = new PrismaClient();

const mockUser: UserEntity = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  role: userRole.USER,
  status: userStatus.ACTIVE,

  createdAt: new Date(),
  updatedAt: new Date(),
};


export class PrismaAuthRepository implements AuthRepository {
  async signup(user: UserEntity): Promise<UserEntity> {
    return mockUser
  }
  async findByEmail(user: UserEntity): Promise<UserEntity | null> {
    const foundUser = mockUser
    return foundUser;
  }
}
