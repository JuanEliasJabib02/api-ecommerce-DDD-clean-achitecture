import Koa from 'koa';
import Router from '@koa/router';
import { HealthRoutes } from '../../api/health/infrastructure/web/routes/health-routes';

const globalRouter = (app: Koa): Router.Middleware => {
  const router = new Router({ prefix: "/api/v1" });

  // Set up health routes
  HealthRoutes.setupRoutes(router, '/health');




  app.use(router.allowedMethods());
  return router.routes()

};

export { globalRouter };