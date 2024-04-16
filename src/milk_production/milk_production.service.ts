import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';

@Injectable()
export class MilkProductionService {
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return 'This action adds a new milkProduction';
  }

  findAll() {
    return `This action returns all milkProduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} milkProduction`;
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return `This action updates a #${id} milkProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} milkProduction`;
  }
}
