
import { AuthRepository } from "../../../domain/auth-repository";
import { UserEntity } from "../../../domain/user-entity";

type SignupUseCaseDependencies = {
  authRepository: AuthRepository;
};

export class SignupUseCase {
  private authRepository: AuthRepository
  constructor({ authRepository }: SignupUseCaseDependencies) {
    this.authRepository = authRepository
  }
  async execute(data: any): Promise<UserEntity> {
    const user = this.authRepository.signup(data)

    /*    return user */
    return user
  }
}
