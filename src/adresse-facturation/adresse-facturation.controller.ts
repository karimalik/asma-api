import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';
import { AdresseFacturationService } from './adresse-facturation.service';
import { CreateAdresseFacturationDto } from './dto/create-adresse-facturation.dto';
import { UpdateAdresseFacturationDto } from './dto/update-adresse-facturation.dto';
import { AdresseFacturation } from './entities/adresse-facturation.entity';

@ApiTags('adresse facturation ressource')
@Controller('adresse-facturation')
export class AdresseFacturationController {
  constructor(private readonly adresseFacturationService: AdresseFacturationService) {}

  /**
   * 
   * @param createAdresseFacturationDto 
   * @returns 
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createAdresseFacturationDto: CreateAdresseFacturationDto) {
    return await this.adresseFacturationService.create(createAdresseFacturationDto);
  }

  /**
   * 
   * @returns 
   */
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<AdresseFacturation[]> {
    return await this.adresseFacturationService.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<AdresseFacturation> {
    return await this.adresseFacturationService.findOne(+id);
  }

  /**
   * 
   * @param id 
   * @param updateAdresseFacturationDto 
   * @returns 
   */
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string, 
    @Body() updateAdresseFacturationDto: UpdateAdresseFacturationDto
    ) {
    return this.adresseFacturationService.update(+id, updateAdresseFacturationDto);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.adresseFacturationService.remove(+id);
  }
}
