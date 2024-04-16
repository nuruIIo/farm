import { Test, TestingModule } from '@nestjs/testing';
import { MeatProductionController } from './meat_production.controller';
import { MeatProductionService } from './meat_production.service';

describe('MeatProductionController', () => {
  let controller: MeatProductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeatProductionController],
      providers: [MeatProductionService],
    }).compile();

    controller = module.get<MeatProductionController>(MeatProductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
