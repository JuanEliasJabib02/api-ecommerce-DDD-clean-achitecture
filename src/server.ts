
import Database from "./shared/infrastructure/config/db-connect";
import app from "./shared/infrastructure/app";
import { database } from "./shared/infrastructure/dependencies/container";
import logger from "./shared/infrastructure/utils/logger";

const port: number = Number(process.env.PORT) || 4001;

const initServer = async (port: number, database: Database): Promise<void> => {

  try {

    await database.connect();
    logger.info('[DB] Connected');

    const server = app.listen(port, () => {
      logger.info(`[APP] Running on PORT:${port}`);
    });

    process.on('SIGINT', async () => {
      await database.disconnect();
      server.close(() => {
        logger.info('[APP] Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    logger.error('[DB] Connection error', error);
    process.exit(1);
  }


}


initServer(port, database);