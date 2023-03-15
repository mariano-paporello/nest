import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LogInData, dataOfNewUser } from './dto/auth.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/logIn')
  logIn(@Body() data: LogInData) {
    return this.usersService.logInOfUser(data);
  }

  @Post('/register')
  register(@Body() data: dataOfNewUser) {
    return this.usersService.crearUsuario(data);
  }

  @Get('/logout')
  logout() {
    return this.usersService.logOut();
  }

  @Get('/profile')
  profile() {
    return 'Profile del usuario';
  }
}
