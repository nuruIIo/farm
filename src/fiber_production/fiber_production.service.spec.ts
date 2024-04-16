import { Test, TestingModule } from '@nestjs/testing';
import { FiberProductionService } from './fiber_production.service';

describe('FiberProductionService', () => {
  let service: FiberProductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiberProductionService],
    }).compile();

    service = module.get<FiberProductionService>(FiberProductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
