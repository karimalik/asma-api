import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
import { Famille } from './entities/famille.entity';

@Injectable()
export class FamilleService {
  
  //constructor
  constructor(@InjectRepository(Famille) private familleRepository: Repository<Famille>) {}

  /*
  * this function create new data
  * @params: createFamilleDto
  */
  async create(createFamilleDto: CreateFamilleDto): Promise<Famille> {

    const createFamille = await this.familleRepository.create(createFamilleDto);

    await this.familleRepository.save(createFamilleDto);

    return createFamille;
  }

  //function for list all data in database
  async findAll(): Promise<Famille[]> {

    return await this.familleRepository.find() ;
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.familleRepository.findOne({ where: { id: id }});

    //verified if the data with id exist in the database
    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`)
    }

    return readData;
  }

  /*
  * this function update the data
  * @Params: id, updateFamilleDto
  */
  async update(id: number, updateFamilleDto: UpdateFamilleDto) {

    const updateData = await this.familleRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found');
    }
    
    await this.familleRepository.update({ id}, updateFamilleDto);

    return updateData;

    // const updateData =  await this.familleRepository.update({ id }, updateFamilleDto);

    // await this.familleRepository.findOne({ id });

    // return updateData;
  }

  /*
  * this function delete the data 
  * @Params: id
  */
  async remove(id: number) {

    await this.familleRepository.delete({ id })

    return {delete: true};
  }
}
