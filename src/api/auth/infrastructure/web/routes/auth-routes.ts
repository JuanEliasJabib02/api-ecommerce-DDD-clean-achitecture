import { Context, Next } from 'koa';
import Router from '@koa/router';
import { AuthController } from '../controller/auth-controller';

export class AuthRoutes {
  static async setupRoutes(router: Router, authController: AuthController, prefix: string = '/auth'): Promise<void> {
    router.post(`${prefix}`, async (ctx: Context, next: Next) => {
      await authController.signup(ctx, next);
    });
  }
}


//IM HERE