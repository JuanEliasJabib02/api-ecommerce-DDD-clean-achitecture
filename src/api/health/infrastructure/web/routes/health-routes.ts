
import Router from '@koa/router';

import { container } from '../../container';
import { HealthController } from '../controller/health-controller';


export class HealthRoutes {
  static async setupRoutes(router: Router, prefix: string = '/health'): Promise<void> {
    const healthController = container.resolve<HealthController>('healthController');

    router.get(`${prefix}`, healthController.check);
  }
}