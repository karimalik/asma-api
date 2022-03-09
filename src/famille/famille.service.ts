import { Injectable } from '@nestjs/common';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';

@Injectable()
export class FamilleService {
  create(createFamilleDto: CreateFamilleDto) {
    return 'This action adds a new famille';
  }

  findAll() {
    return `This action returns all famille`;
  }

  findOne(id: number) {
    return `This action returns a #${id} famille`;
  }

  update(id: number, updateFamilleDto: UpdateFamilleDto) {
    return `This action updates a #${id} famille`;
  }

  remove(id: number) {
    return `This action removes a #${id} famille`;
  }
}
