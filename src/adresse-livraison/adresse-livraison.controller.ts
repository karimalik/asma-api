import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';
import { AdresseLivraisonService } from './adresse-livraison.service';
import { CreateAdresseLivraisonDto } from './dto/create-adresse-livraison.dto';
import { UpdateAdresseLivraisonDto } from './dto/update-adresse-livraison.dto';


@ApiTags('adresse livraison ressource')
@Controller('adresse-livraison')
export class AdresseLivraisonController {
  constructor(private readonly adresseLivraisonService: AdresseLivraisonService) {}

  /**
   * 
   * @param createAdresseLivraisonDto
   * @param creacteClient
   * @returns 
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createAdresseLivraisonDto: CreateAdresseLivraisonDto
    ) {
    return await this.adresseLivraisonService.create(createAdresseLivraisonDto);
  }

  /**
   * 
   * @returns 
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.adresseLivraisonService.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await  this.adresseLivraisonService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateAdresseLivraisonDto: UpdateAdresseLivraisonDto) {
    return await this.adresseLivraisonService.update(+id, updateAdresseLivraisonDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.adresseLivraisonService.remove(+id);
  }
}
