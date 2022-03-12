import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModeLivraisonDto } from './dto/create-mode-livraison.dto';
import { UpdateModeLivraisonDto } from './dto/update-mode-livraison.dto';
import { ModeLivraison } from './entities/mode-livraison.entity';

@Injectable()
export class ModeLivraisonService {

  constructor(@InjectRepository(ModeLivraison) private livraisonRepository: Repository<ModeLivraison>) {}

  /*
  * this function create new data
  * @params: createModeLivraisonDto
  */
  async create(createModeLivraisonDto: CreateModeLivraisonDto): Promise<ModeLivraison> {

    const createData = await this.livraisonRepository.create(createModeLivraisonDto);

    await this.livraisonRepository.save(createModeLivraisonDto);

    return createData;
  }

  //function for list all data in database
  async findAll(): Promise<ModeLivraison[]> {

    return await this.livraisonRepository.find();
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.livraisonRepository.findOne({ where: { id: id } });

    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readData;
  }

  /*
  * this function update the data
  * @Params: id, updateModeLivraisonDto
  */
  async update(id: number, updateModeLivraisonDto: UpdateModeLivraisonDto) {

    const updateData = await this.livraisonRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found');
    }

    await this.livraisonRepository.update({ id }, updateModeLivraisonDto);

    return updateData;
  }

  /*
  * this function delete the data 
  * @Params: id
  */
  async remove(id: number) {

    await this.livraisonRepository.delete({ id });

    return { deleted: true};
  }
}
