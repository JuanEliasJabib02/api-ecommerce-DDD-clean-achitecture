import { Context, Next } from 'koa';

export class HealthController {
  async check(ctx: Context, next: Next): Promise<void> {
    try {
      throw Error("PERRO GATO")
      await next();

    } catch (error) {
      console.log("down in the health controller catch error");
      // Handle the error here or re-throw it to propagate it further
      throw error;
    }
  }
}