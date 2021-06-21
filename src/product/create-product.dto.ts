import { IsString } from 'class-validator';

export class CreateProdectDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: string;
}
