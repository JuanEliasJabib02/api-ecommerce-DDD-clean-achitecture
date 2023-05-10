
import Koa from 'koa';
import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
import cors from '@koa/cors';
import helmet from 'koa-helmet';
//Init app
const app = new Koa()


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


//Routes


export default app;