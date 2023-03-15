import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class LogInData {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
export class dataOfNewUser {
  @IsNotEmpty()
  @IsString()
  gmail: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsNumber()
  phoneNumber: number;

  @IsNotEmpty()
  @IsString()
  image: string;
}
