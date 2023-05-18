
import Koa, { DefaultState, DefaultContext } from 'koa';
import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { globalRouterMiddleware } from './shared/middlewares/global-router';
import { GlobalErrorHandler } from './shared/middlewares/global-error-handler/global-error-handler';



//Init app
const app = new Koa<DefaultState, DefaultContext>();




//Middlewares
interface CustomBodyParserOptions extends Options {
  urlencoded?: boolean;
}

app.use(helmet());
app.use(cors());
app.use(json());
app.use(bodyParser({
  urlencoded: true
} as CustomBodyParserOptions));
// Security Middlewares

//Global Error Handler

app.use(GlobalErrorHandler);

app.use(globalRouterMiddleware())


export default app;