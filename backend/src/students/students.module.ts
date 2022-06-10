import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Student, StudentSchema } from './schemas/students.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
