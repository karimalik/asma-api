import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';

@Injectable()
export class FournisseurService {

  constructor(@InjectRepository(Fournisseur) private fournisseurRepository: Repository<Fournisseur>) {}

  /*
  * this function create new data
  * @params: createFournisseurDto
  */
  async create(createFournisseurDto: CreateFournisseurDto): Promise<Fournisseur>{

    const createData = await this.fournisseurRepository.create(createFournisseurDto);

    await this.fournisseurRepository.save(createFournisseurDto);

    return createData;
  }

  //function for list all data in database
  async findAll(): Promise<Fournisseur[]> {

    return await this.fournisseurRepository.find();
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.fournisseurRepository.findOne({ where: {id: id}});

    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readData;
  }

  /*
  * this function update the data
  * @Params: id, updateFamilleDto
  */
  async update(id: number, updateFournisseurDto: UpdateFournisseurDto) {

    const updateData = await this.fournisseurRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found');
    }

    await this.fournisseurRepository.update({ id }, updateFournisseurDto);

    return updateData;
  }

  /*
  * this function delete the data 
  * @Params: id
  */
  async remove(id: number) {

    await this.fournisseurRepository.delete({ id });

    return { deleted: true };
  }
}
