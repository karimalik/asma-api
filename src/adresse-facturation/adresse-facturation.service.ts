import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdresseFacturationDto } from './dto/create-adresse-facturation.dto';
import { UpdateAdresseFacturationDto } from './dto/update-adresse-facturation.dto';
import { AdresseFacturation } from './entities/adresse-facturation.entity';

@Injectable()
export class AdresseFacturationService {

  constructor(
  @InjectRepository(AdresseFacturation) 
  private faturationRepository: Repository<AdresseFacturation>) {}

  /**
   * 
   * @param createAdresseFacturationDto 
   * @returns 
   */
  async create(
    createAdresseFacturationDto: CreateAdresseFacturationDto
    ): Promise<AdresseFacturation> {

    const createAdr = await this.faturationRepository.create({
      ...createAdresseFacturationDto
    });

    await this.faturationRepository.save(createAdr);

    return createAdr;
  }

  /**
   * 
   * @returns 
   */
  async findAll(): Promise<AdresseFacturation[]> {
    return await this.faturationRepository.find({ relations: ['client']});
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id: number) {

    const findById = await this.faturationRepository.findOne({id}, {relations: ['client']})

    if (!findById) {
      throw new NotFoundException(`the data with ${id} does not exists`);
    }

    return findById;
  }

  /**
   * 
   * @param id 
   * @param updateAdresseFacturationDto 
   * @returns 
   */
  async update(
    id: number, 
    updateAdresseFacturationDto: UpdateAdresseFacturationDto
    ) {
    await this.faturationRepository.update(id, updateAdresseFacturationDto);

    const updateData = this.faturationRepository.findOne(id, { relations: ['client']});

    if (updateData) {
      return updateData;
    } else{
      throw new NotFoundException('not exists');
    }
    
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: number) {

    await this.faturationRepository.delete({ id });

    const deleteData = await this.faturationRepository.findOne(id, { relations: ['client']});

    return { deleted: true};

  }
}
