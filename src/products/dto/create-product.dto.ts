import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsInt()
  @Min(0)
  stock: number;
  @ApiProperty()
  @IsBoolean()
  state: boolean;
}
