import { Test, TestingModule } from '@nestjs/testing';
import { RecordOfIllnessService } from './record_of_illness.service';

describe('RecordOfIllnessService', () => {
  let service: RecordOfIllnessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordOfIllnessService],
    }).compile();

    service = module.get<RecordOfIllnessService>(RecordOfIllnessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
