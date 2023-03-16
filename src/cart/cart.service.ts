import { Injectable } from '@nestjs/common';
import { CartDocument } from './dto/cart.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CartObject,
  CreateCartObject,
  DocumentMongoPost,
} from './dto/cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel('carts') private CartModel: Model<CartDocument>) {}

  async getCartByIdOfUser(idOfUser: string) {
    return await this.CartModel.findOne({ userId: idOfUser });
  }
  async getCartById(id: string) {
    const cart: CartObject | null = await this.CartModel.findById(id);
    return cart;
  }
  async getCartByQuery(query: any) {
    const cart: CartObject | null = await this.CartModel.findOne(query);
    return cart;
  }
  async createCart(data: CreateCartObject) {
    const cart: DocumentMongoPost = await this.CartModel.create(data);
    return cart;
  }
  async updateCart(query: any, update: any) {
    const cartUpdate = await this.CartModel.updateOne(query, update);
    return cartUpdate;
  }
}
