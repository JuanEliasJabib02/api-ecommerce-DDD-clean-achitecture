
import Koa, { DefaultState, DefaultContext, Next } from 'koa';

import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import { globalRouter } from './shared/middlewares/global-router';
import { globalContainer } from './shared/global-container';

//Init app
const app = new Koa<DefaultState, DefaultContext>();

// Add the global container to the app context
app.context.container = globalContainer;

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


app.use(async (ctx, next) => {
  try {
    console.log("first middleware")
    await next()
  } catch (error) {

  }
});


//Global Error Handler

app.use(async (ctx, next) => {
  try {
    await next();
    console.log("before the global error handler")
  } catch (err: any) {
    console.log("GLOBAL ERROR HANDLER", err.message)
  }
});


app.use(globalRouter(app))





export default app;