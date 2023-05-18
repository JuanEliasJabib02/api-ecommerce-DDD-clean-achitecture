import { Context, Next } from 'koa';
import { HealthUseCases } from '../../../application/usecases/health-use-cases';

export class HealthController {
  private healthUseCases: HealthUseCases;

  constructor({ healthUseCases }: { healthUseCases: HealthUseCases }) {
    this.healthUseCases = healthUseCases;
  }

  async check(ctx: Context, next: Next): Promise<void> {
    try {
      const healthStatus = await this.healthUseCases.checkHealth();

      ctx.status = 200;
      ctx.body = {
        healthStatus,
      };
    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}
