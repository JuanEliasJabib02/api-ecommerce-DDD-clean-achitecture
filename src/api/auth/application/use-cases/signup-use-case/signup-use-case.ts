
import { AuthRepository } from "../../../domain/auth-repository";
import { UserEntity } from "../../../domain/user-entity";
import { UserAlreadyExistError } from "../../../domain/error-user-already-exist";
import { SignUpDto } from "../../../infrastructure/web/controller/dto/sign-up-dto";

type SignupUseCaseDependencies = {
  authRepository: AuthRepository;
};

export class SignupUseCase {
  private authRepository: AuthRepository

  constructor({ authRepository }: SignupUseCaseDependencies) {
    this.authRepository = authRepository
  }
  async execute(data: UserEntity): Promise<UserEntity> {
    const userExist = await this.authRepository.findByEmail(data)
    if (userExist) throw new UserAlreadyExistError()
    const user = await this.authRepository.signup(data)
    return user
  }
}