import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Price extends Document {
  @Prop({
    required: true,
    min: 1,
  })
  priceAmount: number;
  @Prop({
    required: true,
    min: 1,
  })
  costAmount: number;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
