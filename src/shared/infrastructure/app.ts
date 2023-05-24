
import Koa, { DefaultState, DefaultContext } from 'koa';
import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
import cors from '@koa/cors';
import { config as dotenvConfig } from 'dotenv';

import helmet from 'koa-helmet';

import { GlobalErrorHandler } from './middlewares/global-error-handler/global-error-handler';
import { globalRouter } from './middlewares/global-router';

//Init app
const app = new Koa<DefaultState, DefaultContext>();

//Middlewares
interface CustomBodyParserOptions extends Options {
  urlencoded?: boolean;
}

dotenvConfig();


// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(json());
app.use(bodyParser({
  urlencoded: true
} as CustomBodyParserOptions));

app.use(GlobalErrorHandler);
app.use(globalRouter())


export default app;