import { Controller, Post, Get, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Get('/:id')
  getCartOfUser(@Param('id') idUser: string) {
    return this.cartService.getCartByIdOfUser(idUser);
  }
  @Post('/')
  sendEmailToUser() {
    return 'queres recibir un gmail de lo que queres comprar';
  }
}
