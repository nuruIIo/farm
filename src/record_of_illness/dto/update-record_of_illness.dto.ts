import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordOfIllnessDto } from './create-record_of_illness.dto';

export class UpdateRecordOfIllnessDto extends PartialType(CreateRecordOfIllnessDto) {}
