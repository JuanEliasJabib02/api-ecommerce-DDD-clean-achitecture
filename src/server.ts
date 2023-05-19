
import app from "./app";
import { prismaClient } from "./shared/infrastructure/dependencies/container";
import PrismaClientProvider from "./database/db.connect";
import logger from "./shared/infrastructure/logger/logger";

const port: number = Number(process.env.PORT) || 4000;

const initServer = async (port: number, prismaClient: PrismaClientProvider): Promise<void> => {

  try {

    await prismaClient.connect();
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


initServer(port, prismaClient);