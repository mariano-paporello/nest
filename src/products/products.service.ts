import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AddProductObject,
  DocumentMongoGet,
  DocumentMongoPost,
  ProductObject,
} from './dto/product.dto';
import { ProductDocument } from './dto/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('productos') private ProductModel: Model<ProductDocument>,
  ) {}
  async getAllProd() {
    const products: ProductObject[] | [] = await this.ProductModel.find({});
    return products;
  }
  async getProductById(id: string) {
    const productFound: ProductObject | DocumentMongoGet =
      await this.ProductModel.findById(id);
    return productFound;
  }
  async getProductByQuery(query: any) {
    const productFound: ProductObject | DocumentMongoGet =
      await this.ProductModel.findOne(query);
    return productFound;
  }
  async postProductToProducts(data: AddProductObject) {
    const productAdded: ProductObject | DocumentMongoPost =
      await this.ProductModel.create(data);
    return productAdded;
  }
  async deleteByQuery(query: any) {
    const deleting = await this.ProductModel.deleteOne(query);
    return deleting;
  }
  async deleteAll() {
    await this.ProductModel.deleteMany();
    return true;
  }
}
