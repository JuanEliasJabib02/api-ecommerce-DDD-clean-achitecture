import { Context, Next } from 'koa';
import { SignupUseCase } from '../../../application/use-cases/signup-use-case/signup-use-case';
import { SignUpDto } from './dto/sign-up-dto';
import { UserEntity } from '../../../domain/user-entity';

export class AuthController {
  private signupUseCase: SignupUseCase;

  constructor({ signupUseCase }: { signupUseCase: SignupUseCase }) {
    this.signupUseCase = signupUseCase;
  }

  async signup(ctx: Context, next: Next): Promise<void> {
    try {

      const data = ctx.request.body
      const userDto = new SignUpDto(data) as UserEntity

      console.log(userDto)
      const user = await this.signupUseCase.execute(userDto)
      ctx.body = user
      ctx.status = 200
      await next()

    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}
