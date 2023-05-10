import { Context } from 'koa';
import { AppError } from '../exceptions/AppError';
import logger from '../logger/logger';


export const globalErrorHandler = async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (err: any) {
    if (err instanceof AppError) {
      logger.warn(`[${ctx.method}] ${ctx.url} - ${err.message}`);

      ctx.status = err.statusCode;
      ctx.body = { error: err.message };
    } else {
      // Log the error for debugging purposes
      logger.error(`[${ctx.method}] ${ctx.url} - ${err.stack}`);

      ctx.status = 500;
      ctx.body = { error: 'Internal Server Error' };
    }
  }
};


/* This code sets up a logger instance using the "winston" library, which is a popular logging library for Node.js. It configures the logger's log level, format, default metadata, and transports, and then exports the logger instance for use throughout the application. This allows the application to easily log messages with varying levels of severity and output those messages to different transports such as the console, a file, or a third-party logging service. */