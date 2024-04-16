import { Module } from '@nestjs/common';
import { RecordOfIllnessService } from './record_of_illness.service';
import { RecordOfIllnessController } from './record_of_illness.controller';

@Module({
  controllers: [RecordOfIllnessController],
  providers: [RecordOfIllnessService],
})
export class RecordOfIllnessModule {}
