import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  thumbnail: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: Number, required: true })
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
