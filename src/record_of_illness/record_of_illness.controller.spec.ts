import { Test, TestingModule } from '@nestjs/testing';
import { RecordOfIllnessController } from './record_of_illness.controller';
import { RecordOfIllnessService } from './record_of_illness.service';

describe('RecordOfIllnessController', () => {
  let controller: RecordOfIllnessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordOfIllnessController],
      providers: [RecordOfIllnessService],
    }).compile();

    controller = module.get<RecordOfIllnessController>(RecordOfIllnessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
