import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ModeLivraisonService } from './mode-livraison.service';
import { CreateModeLivraisonDto } from './dto/create-mode-livraison.dto';
import { UpdateModeLivraisonDto } from './dto/update-mode-livraison.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  async create(@Body() createModeLivraisonDto: CreateModeLivraisonDto) {

    const createData = await this.modeLivraisonService.create(createModeLivraisonDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      createData
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.modeLivraisonService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.modeLivraisonService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateModeLivraisonDto: UpdateModeLivraisonDto) {

    await this.modeLivraisonService.update(+id, updateModeLivraisonDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.modeLivraisonService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }

  @Delete('remove/:id')
  @UseGuards(JwtAuthGuard)
  async DeleteData(@Param('id') id: number) {

    return await this.modeLivraisonService.softDeleteData(id);

  }

  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restoreResponse(@Param('id') id: string) {

    await this.modeLivraisonService.restoreData(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data restored successfully',
    };
  }
}
