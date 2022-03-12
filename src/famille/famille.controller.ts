import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
import { ApiTags } from '@nestjs/swagger';
import { Famille } from './entities/famille.entity';

/*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, createFamilleDto, updateFamilleDto
*/
@ApiTags('Famille  ressource')
@Controller('famille')
export class FamilleController {
  constructor(private readonly familleService: FamilleService) {}

  @Post()
  async create(@Body() createFamilleDto: CreateFamilleDto): Promise<Famille>  {

    return await  this.familleService.create(createFamilleDto);
  }

  @Get()
  async findAll(): Promise<Famille[]>  {

    return await this.familleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return await this.familleService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFamilleDto: UpdateFamilleDto) {

    await this.familleService.update(+id, updateFamilleDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };

    // if (HttpStatus.OK) {
    //   return {
    //     message: 'data updated successfully',
    //   };
    // }

    // if (HttpStatus.NOT_FOUND) {
    //   return {
    //     message: 'Error',
    //   };
    // }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    
    await this.familleService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
