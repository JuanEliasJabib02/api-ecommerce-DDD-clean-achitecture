import { DefaultContext, DefaultState } from 'koa';
import Router from '@koa/router';
import { healthController } from '../../../api/health/infrastructure/web/dependencies/container';
import { HealthRoutes } from '../../../api/health/infrastructure/web/routes/health-routes';

const globalRouter = () => {
  const router = new Router<DefaultState, DefaultContext>({ prefix: "/api/v1" });
  // Set up health routes
  HealthRoutes.setupRoutes(router, healthController, '/health');
  return router.routes()
};

export { globalRouter };