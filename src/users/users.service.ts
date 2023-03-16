import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddUserObject, dataOfNewUser, UserObject } from './dto/auth.dto';
import { UsersDocument } from './dto/users.schema';
import byCript from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private UserModel: Model<UsersDocument>) {}
  async findById(id: string) {
    const user = await this.UserModel.findById(id);
    return user;
  }

  async find(usernameIngresed: string): Promise<UserObject[] | null> {
    console.log(usernameIngresed);
    const userfound = await this.UserModel.find({ username: usernameIngresed });
    if (userfound.length === 0) {
      return null;
    }
    return userfound;
  }

  async logIn(username: string, password: string) {
    const candidatePassword = password;
    const usersfound: UserObject[] | null = await this.find(username);
    if (usersfound != null && usersfound.length > 0) {
      for (let i = 0; i <= usersfound.length; i++) {
        const logUser = await byCript.compare(
          candidatePassword,
          usersfound[i].password,
        );
        if (logUser) {
          return usersfound[i];
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }
  async singUp(data: dataOfNewUser) {
    const newUser = await this.UserModel.create(data);
    return newUser;
  }
}
