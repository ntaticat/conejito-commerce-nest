import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsPositive } from 'class-validator';

export class CreatePriceDto {
  @ApiProperty()
  @IsDecimal({
    decimal_digits: '2',
  })
  @IsPositive()
  priceAmount: number;
  @ApiProperty()
  @IsDecimal({
    decimal_digits: '2',
  })
  @IsPositive()
  costAmount: number;
}
