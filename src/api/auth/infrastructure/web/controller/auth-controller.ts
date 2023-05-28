import { Context, Next } from 'koa';
import { SignupUseCase } from '../../../application/use-cases/signup-use-case/signup-use-case';
import { SignUpDto } from './dto/sign-up-dto';
import { UserEntity } from '../../../domain/user-entity';
import { validate } from 'class-validator';

export class AuthController {
  private signupUseCase: SignupUseCase;

  constructor({ signupUseCase }: { signupUseCase: SignupUseCase }) {
    this.signupUseCase = signupUseCase;
  }

  async signup(ctx: Context, next: Next): Promise<void> {
    try {


      const data = ctx.request.body
      //TODO finish the DTO using the contaienr for handle the depdencys
      const signUpDto = new SignUpDto(data) as UserEntity
      const errors = await validate(signUpDto);
      if (errors.length > 0) {
        // Handle validation errors
        ctx.status = 400;
        ctx.body = { errors };
        return;
      }

      const user = await this.signupUseCase.execute(signUpDto)
      ctx.body = user
      ctx.status = 200
      await next()

    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}
