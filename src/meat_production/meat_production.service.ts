import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';

@Injectable()
export class MeatProductionService {
  create(createMeatProductionDto: CreateMeatProductionDto) {
    return 'This action adds a new meatProduction';
  }

  findAll() {
    return `This action returns all meatProduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meatProduction`;
  }

  update(id: number, updateMeatProductionDto: UpdateMeatProductionDto) {
    return `This action updates a #${id} meatProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} meatProduction`;
  }
}
