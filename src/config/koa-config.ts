
import Koa from 'koa';
import cors from "@koa/cors";
import bodyParser, { Options } from 'koa-bodyparser';
import json from "koa-json";
//Init app
const app = new Koa()


//Middlewares

app.use(cors());
app.use(json());

interface CustomBodyParserOptions extends Options {
  urlencoded?: boolean;
}

app.use(bodyParser({
  urlencoded: true
} as CustomBodyParserOptions));




export default app;