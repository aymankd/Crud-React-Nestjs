import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class FindStudentDto {
  @IsDefined()
  @IsNotEmpty()
  keyword: string;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
