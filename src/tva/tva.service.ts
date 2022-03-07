import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTvaDto } from './dto/create-tva.dto';
import { UpdateTvaDto } from './dto/update-tva.dto';
import { Tva } from './entities/tva.entity';

@Injectable()
export class TvaService {

  constructor(@InjectRepository(Tva) private tvaRepository: Repository<Tva>){}

  /*
  * this function create new data
  * @params: createTvaDto
  */
  async create(createTvaDto: CreateTvaDto) {

    const createTva = await this.tvaRepository.create(createTvaDto);

    await this.tvaRepository.save(createTvaDto);

    return createTva;
  }

  async findAll() {

    return await this.tvaRepository.find() ;
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.tvaRepository.findOne({ where: { id: id } });

    return readData;
  }

  /*
  * this function update the data
  * @Params: id, updateTvaDto
  */
  async update(id: number, updateTvaDto: UpdateTvaDto) {

    await this.tvaRepository.update({ id }, updateTvaDto);

    return await this.tvaRepository.findOne({ id }) ;
  }

  /*
  * this function delete the data in the database
  * @Params: id
  */
  async remove(id: number) {

    await this.tvaRepository.delete({ id });

    return { deleted: true};
  }
}
