import { Test, TestingModule } from '@nestjs/testing';
import { FiberProductionController } from './fiber_production.controller';
import { FiberProductionService } from './fiber_production.service';

describe('FiberProductionController', () => {
  let controller: FiberProductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiberProductionController],
      providers: [FiberProductionService],
    }).compile();

    controller = module.get<FiberProductionController>(FiberProductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
