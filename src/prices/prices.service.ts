import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';

@Injectable()
export class PricesService {
  constructor(
    @InjectModel(Price.name) private readonly priceModel: Model<Price>,
  ) {}

  async add(createPriceDto: CreatePriceDto) {
    const price = await this.priceModel.create(createPriceDto);

    return price;
  }

  async update(id: string, updatePriceDto: UpdatePriceDto) {
    return '';
  }

  async remove(id: string) {
    const price = await this.priceModel.findById(id);

    if (!price) {
      new NotFoundException('Price not found');
    }
    price.deleteOne();

    if (price.$isDeleted()) {
      return price;
    }

    new BadRequestException('Price was not deleted');
  }
}
