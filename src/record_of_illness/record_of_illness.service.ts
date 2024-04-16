import { Injectable } from '@nestjs/common';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_illness.dto';
import { UpdateRecordOfIllnessDto } from './dto/update-record_of_illness.dto';

@Injectable()
export class RecordOfIllnessService {
  create(createRecordOfIllnessDto: CreateRecordOfIllnessDto) {
    return 'This action adds a new recordOfIllness';
  }

  findAll() {
    return `This action returns all recordOfIllness`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordOfIllness`;
  }

  update(id: number, updateRecordOfIllnessDto: UpdateRecordOfIllnessDto) {
    return `This action updates a #${id} recordOfIllness`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordOfIllness`;
  }
}
