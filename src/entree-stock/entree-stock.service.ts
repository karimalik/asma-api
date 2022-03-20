import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntreeStockDto } from './dto/create-entree-stock.dto';
import { UpdateEntreeStockDto } from './dto/update-entree-stock.dto';
import { EntreeStock } from './entities/entree-stock.entity';

@Injectable()
export class EntreeStockService {

  constructor(
    @InjectRepository(EntreeStock)
    private stockEntreRepository: Repository<EntreeStock>
  ) {}
  
  /**
   * 
   * @param createEntreeStockDto 
   * @param user 
   * @returns 
  */
  async create(
    createEntreeStockDto: CreateEntreeStockDto,
    user
    ): Promise<EntreeStock> {
   
    const createData = await this.stockEntreRepository.create({
      ...createEntreeStockDto
    });

    createData.saisirPar = user.nom;

    await this.stockEntreRepository.save(createData);

    return createData;
  }

  /**
   * 
   * @returns 
   */
  async findAll(): Promise<EntreeStock[]>  {
    return await this.stockEntreRepository.find({ 
      relations: ['NumFournisseur', 'Reference']
    })
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id: number) {

    const readData = await this.stockEntreRepository.findOne(id,
      { relations: ['NumFournisseur', 'Reference'] }
    )

    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`)
    }

    return readData;
  }


  /**
   * 
   * @param id 
   * @param updateEntreeStockDto 
   * @param user 
   * @returns 
   */
  async update(
    id: number, 
    updateEntreeStockDto: UpdateEntreeStockDto,
    user
    ) {

    const updateData = await this.stockEntreRepository.findOne(
      { id },
      { relations: ['NumFournisseur', 'Reference'] },
    )

    if (!updateData) {
      throw new NotFoundException('Not found')
    }

    updateEntreeStockDto.AuteurModif = user.nom;

    await this.stockEntreRepository.update({ id }, updateEntreeStockDto);

    return updateData;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: number) {

    await this.stockEntreRepository.delete({ id });

    return { deleted: true };
  }
}
