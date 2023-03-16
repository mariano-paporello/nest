import mongoose from 'mongoose';
export type ProductInCartObject = {
  _id: string;
  amount: number;
  productId: string;
};
export interface CreateCartObject extends CartArray {
  userId: string;
}
export interface CartArray {
  cart: productInCartObject[] | [];
}
export interface productInCartObject {
  _id: string;
  amount: number;
  productId: string;
}

export interface CartObject extends CreateCartObject {
  _id: string;
}
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
