
import Database from "./shared/infrastructure/config/db-connect";
import app from "./shared/infrastructure/app";
import { database } from "./shared/infrastructure/dependencies/container";

import logger from "./shared/infrastructure/utils/logger";

const port: number = Number(process.env.PORT) || 4000;

const initServer = async (port: number, prismaClient: Database): Promise<void> => {

  try {

    await database.connect();
    logger.info('[DB] Connected');

    const server = app.listen(port, () => {
      logger.info(`[APP] Running on PORT:${port}`);
    });

    process.on('SIGINT', async () => {
      await prismaClient.disconnect();
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