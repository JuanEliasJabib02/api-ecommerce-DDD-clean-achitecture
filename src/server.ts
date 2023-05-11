import app from "./app";



const initServer = () => {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`[APP] runinng in PORT:${port}`);
  });

  app.on("error", (error: any) => {
    console.log(`[ERROR] starting server ${error}`)
  });
}


initServer();