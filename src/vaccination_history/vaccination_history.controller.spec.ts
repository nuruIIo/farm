import { Test, TestingModule } from '@nestjs/testing';
import { VaccinationHistoryController } from './vaccination_history.controller';
import { VaccinationHistoryService } from './vaccination_history.service';

describe('VaccinationHistoryController', () => {
  let controller: VaccinationHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccinationHistoryController],
      providers: [VaccinationHistoryService],
    }).compile();

    controller = module.get<VaccinationHistoryController>(VaccinationHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
