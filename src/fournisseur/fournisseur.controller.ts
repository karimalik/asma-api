import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { ApiTags } from '@nestjs/swagger';

/*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, createFamilleDto, updateFamilleDto
*/
@ApiTags('fournisseur ressource')
@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  @Post()
  async create(@Body() createFournisseurDto: CreateFournisseurDto) {

    const createData = await this.fournisseurService.create(createFournisseurDto);
    
    return {
      statusCode: HttpStatus.OK,
      message: 'data created successfully',
      createData
    };
  }

  @Get()
  async findAll() {
    return await this.fournisseurService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fournisseurService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFournisseurDto: UpdateFournisseurDto) {

    await this.fournisseurService.update(+id, updateFournisseurDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.fournisseurService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
