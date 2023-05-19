import { Context, Next } from 'koa';
import { CheckHealthUseCase } from '../../../application/usecases/check-health/check-health-usecase';

export class HealthController {
  private checkHealthUseCase: CheckHealthUseCase;

  constructor({ checkHealthUseCase }: { checkHealthUseCase: CheckHealthUseCase }) {
    this.checkHealthUseCase = checkHealthUseCase;
  }

  async check(ctx: Context, next: Next): Promise<void> {
    try {
      const healthStatus = await this.checkHealthUseCase.execute();

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
