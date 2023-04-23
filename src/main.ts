
import Koa from 'koa';

const app = new Koa();

const startServer = () => {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`[APP] runinng in PORT:${port}`);
  });
}


startServer()