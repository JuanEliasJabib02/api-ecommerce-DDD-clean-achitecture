import app from "./app";

const port: number = Number(process.env.PORT) || 4000;

const initServer = (port: number): void => {

  app.listen(port, () => {
    console.log(`[APP] runinng in PORT:${port}`);
  });

  app.on("error", (error: Error) => {
    console.log(`[ERROR] starting server ${error}`)
  });
}


initServer(port);