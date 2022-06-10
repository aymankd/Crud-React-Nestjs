import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true, type: mongoose.Schema.Types.String })
  firstname: string;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  lastname: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Number })
  age: number;

  @Prop({ required: true, type: mongoose.Schema.Types.String })
  email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
