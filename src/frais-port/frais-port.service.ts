import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFraisPortDto } from './dto/create-frais-port.dto';
import { UpdateFraisPortDto } from './dto/update-frais-port.dto';
import { FraisPort } from './entities/frais-port.entity';

@Injectable()
export class FraisPortService {
  
  constructor(@InjectRepository(FraisPort) private portRepositiry: Repository<FraisPort>){}

   /*
  * this function create new data
  * @params: createFraisPortDto
  */
  async create(createFraisPortDto: CreateFraisPortDto) {

    const fraisPort = await this.portRepositiry.create(createFraisPortDto);

    await this.portRepositiry.save(createFraisPortDto);

    return fraisPort;
  }

  //function for list all data in database
  async findAll() {

    return await this.portRepositiry.find() ;
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readFrais = await this.portRepositiry.findOne({ where: { id: id } });

    //if the data does not exist
    if (!readFrais) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readFrais;
  }

  /*
  * this function update the data
  * @Params: id, updateFraisPortDto
  */
  async update(id: number, updateFraisPortDto: UpdateFraisPortDto) {

    const editFrais = await this.portRepositiry.update({ id }, updateFraisPortDto);

    await this.portRepositiry.findOne({ id });

    return editFrais;

  }

  /*
  * this function delete the data 
  * @Params: id
  */
  async remove(id: number) {

    await this.portRepositiry.delete({ id });

    return {deleted: true};
  }
}
