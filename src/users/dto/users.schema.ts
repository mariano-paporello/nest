import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  gmail: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  age: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true })
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
