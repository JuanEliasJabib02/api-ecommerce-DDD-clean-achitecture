import { Context, Next } from 'koa';
import Router from '@koa/router';
import { HealthController } from '../controller/health-controller';

export class HealthRoutes {
  static async setupRoutes(router: Router, healthController: HealthController, prefix: string = '/health'): Promise<void> {
    router.get(`${prefix}`, async (ctx: Context, next: Next) => {

      await healthController.check(ctx, next);
    });
  }
}
