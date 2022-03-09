import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { FraisPortService } from './frais-port.service';
import { CreateFraisPortDto } from './dto/create-frais-port.dto';
import { UpdateFraisPortDto } from './dto/update-frais-port.dto';
import { ApiTags } from '@nestjs/swagger';


 /*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, createFraisPortDto, updateFraisPortDto
  */
@ApiTags('Frais Port ressource')
@Controller('frais-port')
export class FraisPortController {
  constructor(private readonly fraisPortService: FraisPortService) {}

  @Post()
  async create(@Body() createFraisPortDto: CreateFraisPortDto) {

    const createData = await this.fraisPortService.create(createFraisPortDto);

    if (HttpStatus.OK) {
      return {
        message: 'data added successfully',
        createData,
      };
    }else {
      return {
        message: 'error',
      };
    }
  }

  @Get()
  async findAll() {

    const ports = await this.fraisPortService.findAll();

    return { 
      statusCode: HttpStatus.OK,
      message: 'data fetched successfully',
      ports,
     };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return await this.fraisPortService.findOne(+id);

  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFraisPortDto: UpdateFraisPortDto) {

    await this.fraisPortService.update(+id, updateFraisPortDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await  this.fraisPortService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
