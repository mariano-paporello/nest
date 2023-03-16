import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import mongoose from 'mongoose';
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
export interface AddUserObject {
  gmail: string;
  password: string;
  age: string;
  username: string;
  phoneNumber: string;
  image: string;
}

export interface UserObject extends AddUserObject {
  _id: string;
}

export type DocumentMongoGet =
  | (mongoose.Document<
      unknown,
      any,
      {
        [x: string]: any;
      }
    > & {
      [x: string]: any;
    } & Required<{
        _id: unknown;
      }>)
  | null;

export type DocumentMongoPost = mongoose.Document<
  unknown,
  any,
  {
    [x: string]: any;
  }
> & {
  [x: string]: any;
} & Required<{
    _id: unknown;
  }>;
