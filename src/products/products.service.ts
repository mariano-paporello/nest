import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './dto/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('productos') private ProductModel: Model<ProductDocument>,
  ) {}
  async getAllProd() {
    return await this.ProductModel.find({});
  }
  async getProductById(id: string) {
    return `getProductById: ${id}`;
  }
  async getProductByQuery(query: any) {
    return `getProductByquery: ${query}`;
  }
}
