import { Controller, Post, Get } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Get('/')
  getCartOfUser() {
    return 'cart of the user';
  }
  @Post('/')
  sendEmailToUser() {
    return 'queres recibir un gmail de lo que queres comprar';
  }
}
