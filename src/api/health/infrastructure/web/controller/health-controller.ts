import { Context, Next } from 'koa';
import { HealthService } from '../../../domain/service/health-service';

export class HealthController {
  private healthService: HealthService;

  constructor({ healthService }: { healthService: HealthService }) {
    this.healthService = healthService;
  }

  async check(ctx: Context, next: Next): Promise<void> {
    try {
      const healthStatus = await this.healthService.checkHealth();

      /* ctx.status = 200;
      ctx.body = {
        healthStatus,
      }; */
    } catch (error) {
      // Re-throw the error to propagate it to the middleware stack and reach the global error handler
      throw error;
    }
  }
}
