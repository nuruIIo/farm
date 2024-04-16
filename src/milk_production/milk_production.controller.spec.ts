import { Test, TestingModule } from '@nestjs/testing';
import { MilkProductionController } from './milk_production.controller';
import { MilkProductionService } from './milk_production.service';

describe('MilkProductionController', () => {
  let controller: MilkProductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilkProductionController],
      providers: [MilkProductionService],
    }).compile();

    controller = module.get<MilkProductionController>(MilkProductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
