import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';

@Injectable()
export class FiberProductionService {
  create(createFiberProductionDto: CreateFiberProductionDto) {
    return 'This action adds a new fiberProduction';
  }

  findAll() {
    return `This action returns all fiberProduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fiberProduction`;
  }

  update(id: number, updateFiberProductionDto: UpdateFiberProductionDto) {
    return `This action updates a #${id} fiberProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} fiberProduction`;
  }
}
