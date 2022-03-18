import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, HttpStatus } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/shared/decorators/user.decorator';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

@ApiTags('produit ressource')
@Controller('produit')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  /**
   * 
   * @param createProduitDto 
   * @param user 
   * @returns 
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createProduitDto: CreateProduitDto,
    @User() user
    ) {
    return await this.produitService.create(createProduitDto, user);
  }

   /**
   * 
   * @returns 
   */
    @Get('stats')
    @UseGuards(JwtAuthGuard)
    async statsProduct() {
      return await this.produitService.getStatProduct();
    }

  /**
   * 
   * @returns 
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.produitService.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.produitService.findOne(+id);
  }

  /**
   * 
   * @param id 
   * @param updateProduitDto 
   * @param user 
   * @returns 
   */
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string, 
    @Body() updateProduitDto: UpdateProduitDto,
    @User() user
    ) {
    await this.produitService.update(+id, updateProduitDto, user);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.produitService.remove(+id);

    return{
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully'
    };
  }
}
