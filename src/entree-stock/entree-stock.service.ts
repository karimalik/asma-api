import { Injectable } from '@nestjs/common';
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

  
  async findAll(): Promise<EntreeStock[]>  {
    return await this.stockEntreRepository.find({ 
      relations: ['NumFournisseur', 'Reference']
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} entreeStock`;
  }

  update(id: number, updateEntreeStockDto: UpdateEntreeStockDto) {
    return `This action updates a #${id} entreeStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} entreeStock`;
  }
}
