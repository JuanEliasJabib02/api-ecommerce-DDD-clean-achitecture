import Koa from 'koa';
import Router from '@koa/router';

/* import { healthRoutes } from '../modules/health/infrastructure/web/routes/healthRoutes'; */

const GlobalRouter = (app: Koa): void => {
  const router = new Router();

  // Health Routes
  /*  router.use('/health', healthRoutes.routes(), healthRoutes.allowedMethods()); */

  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { GlobalRouter };















/* NOTES------------------

By passing in the app instance as a parameter, the middleware is able to access and modify the routes and other properties of the Koa application. This is useful when you want to add new routes or middleware functions to the application in a modular and organized way.
 */