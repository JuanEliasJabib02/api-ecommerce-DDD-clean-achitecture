import { AppError } from "../../../shared/domain/AppError";

export class UserAlreadyExistError extends AppError {
  constructor() {
    super(400, 'User already exist')
  }
}