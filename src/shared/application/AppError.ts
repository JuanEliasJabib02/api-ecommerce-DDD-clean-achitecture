export class AppError extends Error {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly isOperational: boolean;

  constructor(statusCode: number, message: string, isOperational = true) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

/* AppError is a custom error class that extends the built-in Error class in JavaScript. It is used to create and throw errors that are specific to the application's domain and can be caught and handled in a centralized error handling middleware. */