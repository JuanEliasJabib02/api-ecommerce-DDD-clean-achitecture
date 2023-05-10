
import Koa from 'koa';
import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { globalErrorHandler } from './shared/middlewares/global-error-handler';
import { globalRouter } from './shared/middlewares/global-router';
import { globalContainer } from './shared/global-container';

//Init app
const app = new Koa()

// Add the global container to the app context
app.context.container = globalContainer;

//Middlewares
interface CustomBodyParserOptions extends Options {
  urlencoded?: boolean;
}

app.use(json());
app.use(bodyParser({
  urlencoded: true
} as CustomBodyParserOptions));


// Security Middlewares
app.use(helmet());
app.use(cors());


//Global Router
app.use(globalRouter(app));

//Global Error Handler

app.use(globalErrorHandler)


export default app;