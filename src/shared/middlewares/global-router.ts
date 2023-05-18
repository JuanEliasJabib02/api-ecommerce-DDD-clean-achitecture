import Koa, { DefaultContext, DefaultState } from 'koa';
import Router from '@koa/router';
import { HealthRoutes } from '../../api/health/infrastructure/web/routes/health-routes';

const globalRouter = (app: Koa<DefaultState, DefaultContext>): Router.Middleware => {
  const router = new Router<DefaultState, DefaultContext>({ prefix: "/api/v1" });

  // Set up health routes
  HealthRoutes.setupRoutes(router, '/health');

  return router.routes()
};

export { globalRouter };