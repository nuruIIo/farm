import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordOfIllnessService } from './record_of_illness.service';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_illness.dto';
import { UpdateRecordOfIllnessDto } from './dto/update-record_of_illness.dto';

@Controller('record-of-illness')
export class RecordOfIllnessController {
  constructor(private readonly recordOfIllnessService: RecordOfIllnessService) {}

  @Post()
  create(@Body() createRecordOfIllnessDto: CreateRecordOfIllnessDto) {
    return this.recordOfIllnessService.create(createRecordOfIllnessDto);
  }

  @Get()
  findAll() {
    return this.recordOfIllnessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordOfIllnessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordOfIllnessDto: UpdateRecordOfIllnessDto) {
    return this.recordOfIllnessService.update(+id, updateRecordOfIllnessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordOfIllnessService.remove(+id);
  }
}
