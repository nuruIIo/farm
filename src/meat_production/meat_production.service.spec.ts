import { Test, TestingModule } from '@nestjs/testing';
import { MeatProductionService } from './meat_production.service';

describe('MeatProductionService', () => {
  let service: MeatProductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeatProductionService],
    }).compile();

    service = module.get<MeatProductionService>(MeatProductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
