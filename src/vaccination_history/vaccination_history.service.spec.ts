import { Test, TestingModule } from '@nestjs/testing';
import { VaccinationHistoryService } from './vaccination_history.service';

describe('VaccinationHistoryService', () => {
  let service: VaccinationHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccinationHistoryService],
    }).compile();

    service = module.get<VaccinationHistoryService>(VaccinationHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
