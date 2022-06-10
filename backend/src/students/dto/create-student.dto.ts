import { IsDefined } from 'class-validator';

export class CreateStudentDto {
  @IsDefined()
  firstname: string;

  @IsDefined()
  lastname: string;

  @IsDefined()
  age: number;

  @IsDefined()
  email: string;
}
