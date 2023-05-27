import { UserEntity } from "./user-entity";

export interface AuthRepository {
  signup(user: UserEntity): Promise<UserEntity>
  findByEmail(user: UserEntity): Promise<UserEntity | null>
}

