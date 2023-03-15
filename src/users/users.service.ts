import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { dataOfNewUser, LogInData } from './dto/auth.dto';
import { UsersDocument } from './dto/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private UserModel: Model<UsersDocument>) {}
  async buscarUsuario(id: string) {
    return await this.UserModel.findById(id);
  }
  async crearUsuario(data: dataOfNewUser) {
    return await this.UserModel.create(data);
  }
  async logInOfUser(dataDeLogIn: LogInData) {
    return `reviso si esxiste un usuario con la misma data: ${dataDeLogIn.username} y lo devuelvo como usuario de la session`;
  }
  async logOut() {
    return 'destruyo la session del usuario';
  }
}
