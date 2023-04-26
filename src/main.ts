import app from "./config/koa-config";

const startServer = () => {
  const port = process.env.PORT || 4001;

  app.listen(port, () => {
    console.log(`[APP] runinng in PORT:${port}`);
  });

  app.on("error", (error: any) => {
    console.log(`[ERROR] starting server ${error}`)
  });
}


startServer();