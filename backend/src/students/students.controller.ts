/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { FindStudentDto } from './dto/find-student.dto';
import { Student } from './schemas/students.schema';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  find(
    @Query() findStudentDto: FindStudentDto,
  ): Promise<{ data: Student[]; total: number }> {
    return this.studentsService.find(findStudentDto);
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }
}
