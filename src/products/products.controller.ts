import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AddProductObject } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('/')
  getAllProducts() {
    return this.productsService.getAllProd();
  }
  @Get('/:id')
  getOneProduct(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }
  @Post('/')
  newProduct(@Body() dataOfProducts: AddProductObject) {
    return this.productsService.postProductToProducts(dataOfProducts);
  }
  @Delete('/')
  deleteOneProduct(@Body() query: any) {
    return this.productsService.deleteByQuery(query);
  }
}
