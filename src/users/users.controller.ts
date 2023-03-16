import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LogInData, dataOfNewUser } from './dto/auth.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/logIn')
  logIn(@Body() data: LogInData) {
    return this.usersService.logIn(data.username, data.password);
  }

  @Post('/register')
  register(@Body() data: dataOfNewUser) {
    return this.usersService.singUp(data);
  }

  @Get('/logout')
  logout() {
    return 'culo';
  }

  @Get('/profile')
  profile() {
    return 'Profile del usuario';
  }
}
