import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, CartModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
