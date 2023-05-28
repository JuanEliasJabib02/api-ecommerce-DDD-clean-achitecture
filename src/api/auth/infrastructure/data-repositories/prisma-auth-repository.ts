import { PrismaClient } from '@prisma/client';
import { UserEntity, userRole, userStatus } from '../../domain/user-entity';
import { AuthRepository } from "../../domain/auth-repository"

const prisma = new PrismaClient();



export class PrismaAuthRepository implements AuthRepository {
  async signup(user: UserEntity): Promise<UserEntity> {
    const createdUser = user
    return createdUser
  }
  async findByEmail(user: UserEntity): Promise<UserEntity | null> {
    const foundUser = null
    return foundUser;
  }
}
