import { DefaultState, DefaultContext, Middleware, ParameterizedContext, Next } from 'koa';
import { AppError } from '../../exceptions/AppError';

export const globalErrorHandler: Middleware<DefaultState, DefaultContext> = async (
  ctx: ParameterizedContext<DefaultState, DefaultContext>,
  next: Next
): Promise<void> => {
  try {
    // Execute the next middleware or route handler
    await next();
  } catch (err: any) {
    if (err instanceof AppError) {
      // If the error is an instance of AppError (operational error), handle it accordingly
      console.log("2"); // Log "dog" for operational errors
    } else {
      console.log("3"); // Log "cat" for non-operational errors
    }
  }
};
