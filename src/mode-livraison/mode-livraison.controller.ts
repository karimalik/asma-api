import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ModeLivraisonService } from './mode-livraison.service';
import { CreateModeLivraisonDto } from './dto/create-mode-livraison.dto';
import { UpdateModeLivraisonDto } from './dto/update-mode-livraison.dto';
import { ApiTags } from '@nestjs/swagger';

/*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, createFraisPortDto, updateFraisPortDto
*/
@ApiTags('mode-livraison ressource')
@Controller('mode-livraison')
export class ModeLivraisonController {
  constructor(private readonly modeLivraisonService: ModeLivraisonService) {}

  @Post()
  async create(@Body() createModeLivraisonDto: CreateModeLivraisonDto) {

    const createData = await this.modeLivraisonService.create(createModeLivraisonDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      createData
    };
  }

  @Get()
  async findAll() {
    return await this.modeLivraisonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.modeLivraisonService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateModeLivraisonDto: UpdateModeLivraisonDto) {

    await this.modeLivraisonService.update(+id, updateModeLivraisonDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.modeLivraisonService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
