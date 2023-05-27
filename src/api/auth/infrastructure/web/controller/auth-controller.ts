import { Context, Next } from 'koa';
import { SignupUseCase } from '../../../application/use-cases/signup-use-case/signup-use-case';
import { UserEntity, userRole, userStatus } from "../../../domain/user-entity";

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

export class AuthController {
  private signupUseCase: SignupUseCase;

  constructor({ signupUseCase }: { signupUseCase: SignupUseCase }) {
    this.signupUseCase = signupUseCase;
  }

  async signup(ctx: Context, next: Next): Promise<void> {
    try {
      const data = mockUser
      const user = await this.signupUseCase.execute(data)
      ctx.body = user
      ctx.status = 200
      await next()

    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}
