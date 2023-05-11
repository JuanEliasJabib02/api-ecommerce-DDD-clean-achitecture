import { Context } from "vm";
import { DiscordNotification } from "./discord-notifications";
import { Next } from "koa";
import { AppError } from "../../exceptions/AppError";

export async function GlobalErrorHandler(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err: any) {

    if (err instanceof AppError) {
      /* Handle operationals errors for the client */
      console.log("is operational")
      ctx.status = err.statusCode || 500;
      ctx.body = { error: err.message };
    } else {

      // Monitoring non-operationals errors in discord the errors 
      console.log("Non-operational error:", err);

      const discordWebhookUrl = 'https://discord.com/api/webhooks/1106067217608605816/vWKUGDmZH4TKL80gDInmELL9sDqrAcrPH4sSPhEs0MnpNtLqjo_JgVBxCNctFdwAAmFr';
      const discordNotification = new DiscordNotification(discordWebhookUrl);

      await discordNotification.sendErrorNotification(err);
      ctx.status = 500;
      ctx.body = { error: 'Internal Server Error' };

    }
  }
}

