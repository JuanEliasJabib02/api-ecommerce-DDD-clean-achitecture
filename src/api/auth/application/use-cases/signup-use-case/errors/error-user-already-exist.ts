import { AppError } from "../../../../../../shared/application/AppError";

export class UserAlreadyExistError extends AppError {
  constructor() {
    super(400, 'User already exist')
  }
}