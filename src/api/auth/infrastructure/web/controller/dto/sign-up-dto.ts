import { IsNotEmpty, IsString, isEmail, isNumber } from 'class-validator';

//TODO THIS DTO IS NOT WORKING @IS EMAIl fix it 
export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  email: string;
  password: string;
  constructor(data: any) {
    console.log("executed")
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
    this.password = data.password
  }
}
