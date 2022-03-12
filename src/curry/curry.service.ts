import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurryDto } from './dto/create-curry.dto';
import { UpdateCurryDto } from './dto/update-curry.dto';
import { Curry } from './entities/curry.entity';

@Injectable()
export class CurryService {

  constructor(@InjectRepository(Curry) private curryRepository: Repository<Curry>) {}

  async create(createCurryDto: CreateCurryDto) {

    const curry = await this.curryRepository.create(createCurryDto);

    await this.curryRepository.save(createCurryDto);

    return 
  }

  async findAll() {

    return await this.curryRepository.find();
  }

  async findOne(id: number) {

    const read = await this.curryRepository.findOne({ where: { id: id}});

    if (!read) {
      throw new NotFoundException(`the data with ${id} was not found`);
    }
    return read;
  }

  async update(id: number, updateCurryDto: UpdateCurryDto) {
    await this.curryRepository.update({ id}, updateCurryDto);

    return await this.curryRepository.findOne({ id });
  }

  async remove(id: number) {

    await this.curryRepository.delete({ id });

    return {deleted: true};
  }
}
