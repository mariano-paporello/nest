import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LogInData, RegisterData } from './dto/auth.dto';

@Controller('users')
export class UsersController {
  @Post('/logIn')
  logIn(@Body() data: LogInData) {
    return `queres logearte ${data.username}`;
  }
  @Post('/register')
  register(@Body() data: RegisterData) {
    return `queres registrarte ${data.gmail}`;
  }
}
