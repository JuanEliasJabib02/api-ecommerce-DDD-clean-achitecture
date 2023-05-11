import { Context, Next } from 'koa';

export class HealthController {
  async check(ctx: Context, next: Next): Promise<void> {
    try {



    } catch (error) {
      //  re-throw it to propagate to the middle stack and reach the global errors+
      throw error;
    }
  }
}