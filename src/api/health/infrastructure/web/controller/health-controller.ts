import { Context } from 'koa';

export class HealthController {
  async check(ctx: Context): Promise<void> {
    console.log("Im here")
    ctx.body = {
      status: 'ok',
      message: 'Service is healthy'
    };
  }

  static resolve() {
    return new HealthController();

  }
}
