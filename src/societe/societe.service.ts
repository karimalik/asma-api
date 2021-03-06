import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
import { Societe } from './entities/societe.entity';

@Injectable()
export class SocieteService {

  constructor (@InjectRepository(Societe) private societeRepository: Repository<Societe>) {}

  /*
  * this function create new data
  * @params: createSocieteDto
  */
  async create(createSocieteDto: CreateSocieteDto) {

    const societe = await this.societeRepository.create(createSocieteDto);

    this.societeRepository.save(createSocieteDto);

    return societe;
  }

  async findAll() {

    return await this.societeRepository.find();
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readSociete = await this.societeRepository.findOne({ where: { id: id } });

    if (!readSociete) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readSociete;
  }

  /*
  * this function update the data
  * @Params: id, updateClientDto
  */
  async update(id: number, updateSocieteDto: UpdateSocieteDto) {

    const updateData = await this.societeRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found')
    }

    await this.societeRepository.update({ id }, updateSocieteDto);

    return updateData;
  }

  /*
  * this function delete the data in the database
  * @Params: id
  */
  async remove(id: number) {

    await this.societeRepository.delete({ id });

    return { deleted: true };
  }
}
