import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { PricesModule } from './prices/prices.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dbConejitoCommerce'),
    CategoriesModule,
    PricesModule,
  ],
})
export class AppModule {}
