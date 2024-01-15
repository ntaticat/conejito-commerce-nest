import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Price, PriceSchema } from './entities/price.entity';

@Module({
  controllers: [PricesController],
  providers: [PricesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Price.name,
        schema: PriceSchema,
      },
    ]),
  ],
})
export class PricesModule {}
