import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

@Module({
  imports: [
    ProductsModule,
    CartModule,
    UsersModule,
    MongooseModule.forRoot(config.MONGO_ATLAS_URL, { retryAttempts: 3 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
