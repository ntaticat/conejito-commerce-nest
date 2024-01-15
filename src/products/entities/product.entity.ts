import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: false,
  })
  description: string;
  @Prop({
    min: 0,
    default: 0,
  })
  stock: number;
  @Prop({
    default: false,
  })
  state: boolean;
  @Prop({
    required: false,
    default: '',
  })
  img: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
