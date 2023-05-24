import { DefaultContext, DefaultState } from 'koa';
import Router from '@koa/router';
import { healthController } from '../../../api/health/infrastructure/dependencies';
import { HealthRoutes } from '../../../api/health/infrastructure/web/routes/health-routes';
import { AuthRoutes } from '../../../api/auth/infrastructure/web/routes/auth-routes';
import { authController } from '../../../api/auth/infrastructure/depedencies';

const globalRouter = () => {
  const router = new Router<DefaultState, DefaultContext>({ prefix: "/api/v1" });
  // Set up health routes
  HealthRoutes.setupRoutes(router, healthController, '/health');
  AuthRoutes.setupRoutes(router, authController, '/auth');
  return router.routes()
};

export { globalRouter };