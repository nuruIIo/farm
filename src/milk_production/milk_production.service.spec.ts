import { Test, TestingModule } from '@nestjs/testing';
import { MilkProductionService } from './milk_production.service';

describe('MilkProductionService', () => {
  let service: MilkProductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilkProductionService],
    }).compile();

    service = module.get<MilkProductionService>(MilkProductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
