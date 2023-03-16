import mongoose from 'mongoose';
export interface AddProductObject {
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
}
export interface ProductObject extends AddProductObject {
  _id: string;
  id?: string;
}
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
