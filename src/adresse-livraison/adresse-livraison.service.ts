import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { Repository } from 'typeorm';
import { CreateAdresseLivraisonDto } from './dto/create-adresse-livraison.dto';
import { UpdateAdresseLivraisonDto } from './dto/update-adresse-livraison.dto';
import { AdresseLivraison } from './entities/adresse-livraison.entity';

@Injectable()
export class AdresseLivraisonService {

  constructor(@InjectRepository(AdresseLivraison)
  private adrRepository: Repository<AdresseLivraison>
  ) {}

  /**
   * 
   * @param createAdresseLivraisonDto 
   * @returns 
   */
  async create(
    createAdresseLivraisonDto: CreateAdresseLivraisonDto
    ) {

    const createData = await this.adrRepository.create({
      ...createAdresseLivraisonDto,
    });

    await this.adrRepository.save(createData);

    return createData;
  }

  /**
   * 
   * @returns 
   */
  async findAll() {
    return await this.adrRepository.find({ relations: ['client'] });
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id: number) {

    const readData = await this.adrRepository.findOne(id , { relations: ['client'] });

    if (readData) {
      return readData;
    } else {
      throw new NotFoundException(`The data with id ${id} was not found`);
    }
    
  }

  /**
   * 
   * @param id 
   * @param updateAdresseLivraisonDto 
   * @returns 
   */
  async update(id: number, updateAdresseLivraisonDto: UpdateAdresseLivraisonDto) {

    await this.adrRepository.update({ id }, updateAdresseLivraisonDto);

    const updateAdr = await this.adrRepository.findOne(id, { relations: ['client'] });

    if (updateAdr) {
      return updateAdr;
    } else {
      throw new NotFoundException('the data does not exists');
    }
    
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: number) {

    await this.adrRepository.delete(id);

    return { deleted: true};
  }
}
