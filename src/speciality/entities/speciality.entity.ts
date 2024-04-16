import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Worker } from '../../worker/entities/worker.entity';

export type SpecialtyDocument = HydratedDocument<Specialty>;

@Schema()
export class Specialty {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({type: [{type: mongoose.Schema.ObjectId, ref: 'Worker'}]})
  workers: Worker[]
}

export const SpecialtySchema = SchemaFactory.createForClass(Specialty);
