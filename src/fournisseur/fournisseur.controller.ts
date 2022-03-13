import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus, UseGuards } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  async create(@Body() createFournisseurDto: CreateFournisseurDto) {

    const createData = await this.fournisseurService.create(createFournisseurDto);
    
    return {
      statusCode: HttpStatus.OK,
      message: 'data created successfully',
      createData
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.fournisseurService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.fournisseurService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateFournisseurDto: UpdateFournisseurDto) {

    await this.fournisseurService.update(+id, updateFournisseurDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.fournisseurService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
