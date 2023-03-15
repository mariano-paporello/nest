import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('/')
  getAllLibros() {
    return this.productsService.getAllProd();
  }
  @Post('/:id')
  productToCart(@Param('id') idProduct: string) {
    return `ProductId wanted: ${idProduct}`;
  }
}
