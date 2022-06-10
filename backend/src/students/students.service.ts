/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { FindStudentDto } from './dto/find-student.dto';
import { Student, StudentDocument } from './schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private catModel: Model<StudentDocument>,
  ) {}

  async create(createCatDto: CreateStudentDto): Promise<Student> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Student[]> {
    return this.catModel.find().exec();
  }

  async find(
    filter: FindStudentDto,
  ): Promise<{ data: Student[]; total: number }> {
    let options = {};
    if (filter.keyword !== '') {
      options = {
        $or: [
          { firstname: new RegExp(filter.keyword, 'i') },
          { lastname: new RegExp(filter.keyword, 'i') },
        ],
      };
    }
    const page = filter.page || 1;
    const limit = filter.limit || 10;
    let query = this.catModel
      .find(options)
      .skip((page - 1) * limit)
      .limit(+limit);

    const total = await this.catModel.countDocuments(options).exec();
    const data = await query.exec();
    return { data: data, total: total };
  }

  async update(id: string, createCatDto: CreateStudentDto): Promise<Student> {
    return this.catModel.findByIdAndUpdate(id, createCatDto, { new: true });
  }

  async delete(id: string): Promise<Student> {
    return this.catModel.findByIdAndRemove(id);
  }
}
