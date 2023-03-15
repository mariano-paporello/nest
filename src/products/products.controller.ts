import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  getAllLibros() {
    return 'culo';
  }
  @Post('/:id')
  productToCart(@Param('id') idProduct: string) {
    return `culo post${idProduct}`;
  }
}
