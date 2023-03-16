import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProductInCartObject } from './cart.dto';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: String, required: true })
  userId: string;

  cart: ProductInCartObject[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
