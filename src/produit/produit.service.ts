import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/decorators/user.decorator';
import { Repository } from 'typeorm';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';

@Injectable()
export class ProduitService {

  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>
  ) {}

  /**
   * 
   * @param createProduitDto 
   * @param user 
   * @returns 
   */
  async create(
    createProduitDto: CreateProduitDto,
    user
    ):  Promise<Produit> {

    const createProduct = await this.produitRepository.create({
      ...createProduitDto,
    });

    createProduct.SaisirPar = user.nom;

    try {

      await this.produitRepository.save(createProduct);

    } catch (error) {
      
      throw new ConflictException('Reference must be unique');
    }

    return createProduct;
  }

  /**
   * 
   * @returns 
   */
  async findAll(): Promise<Produit[]> {

    return this.produitRepository.find(
      { relations: ['NumFournisseur', 'TauxTva', 'codePort', 'codeFamille'],
    })
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id: number) {
    
    const findProduct = await this.produitRepository.findOne(
      id,
      { relations: ['NumFournisseur', 'TauxTva', 'codePort', 'codeFamille'],
    });

    if (!findProduct) {
      throw new NotFoundException(`data with ${id} was not found`);
    }

    return findProduct;
  }

  /**
   * 
   * @param id 
   * @param updateProduitDto 
   * @param user 
   * @returns 
   */
  async update(
    id: number, 
    updateProduitDto: UpdateProduitDto,
    user
    ): Promise<Produit> {
    const updateProduct = await this.produitRepository.findOne(
      id,
      { relations: ['NumFournisseur', 'TauxTva', 'codePort', 'codeFamille'],
    })
    
    if (!updateProduct) {
      throw new NotFoundException('the data does not exists');
    } 

    updateProduitDto.AuteurModif = user.nom;

    await this.produitRepository.update({ id },updateProduitDto);

    return updateProduct;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: number) {
    await this.produitRepository.delete({ id });

    return { deleted: true };
  }

  /**
   * 
   * @returns 
   */
  async getStatProduct() {
    const qb = await this.produitRepository.createQueryBuilder("produit");

    return await qb.select("count(produit.id) as nombreProduit").getRawMany();
  }
}
