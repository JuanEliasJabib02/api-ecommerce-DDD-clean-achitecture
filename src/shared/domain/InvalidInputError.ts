import { AppError } from "./AppError";

export class InvalidInputError extends AppError {
  constructor() {
    super(400, 'required fields are missing')
  }
}