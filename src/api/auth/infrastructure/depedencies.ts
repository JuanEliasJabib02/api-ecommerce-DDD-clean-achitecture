import { createContainer, asClass, InjectionMode } from 'awilix';
import { AuthController } from './web/controller/auth-controller';
import { SignupUseCase } from '../application/use-cases/signup-use-case/signup-use-case';
import { PrismaAuthRepository } from './data-repositories/prisma-auth-repository';
import { AuthRepository } from '../domain/auth-repository';

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  authController: asClass(AuthController).singleton(),
  signupUseCase: asClass(SignupUseCase).singleton(),
  authRepository: asClass(PrismaAuthRepository).singleton()

});

export const authController = container.resolve<AuthController>("authController")
export const signupUseCase = container.resolve<SignupUseCase>("signupUseCase")
export const authRepository = container.resolve<AuthRepository>("authRepository")
