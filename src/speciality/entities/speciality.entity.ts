import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialtyDocument = HydratedDocument<Specialty>;

@Schema()
export class Specialty {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;
}

export const SpecialtySchema = SchemaFactory.createForClass(Specialty);
