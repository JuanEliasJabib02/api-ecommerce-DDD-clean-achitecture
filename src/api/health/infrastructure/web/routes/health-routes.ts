
import Router from '@koa/router';
import { HealthController } from '../controller/health-controller';
import { container } from '../../container';


export class HealthRoutes {
  static async setupRoutes(router: Router, prefix: string = '/health'): Promise<void> {
    const healthController = container.resolve<HealthController>('healthController');
    router.get(`${prefix}`, healthController.check);
  }
}