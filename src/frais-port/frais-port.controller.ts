import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { FraisPortService } from './frais-port.service';
import { CreateFraisPortDto } from './dto/create-frais-port.dto';
import { UpdateFraisPortDto } from './dto/update-frais-port.dto';
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
@ApiTags('Frais Port ressource')
@Controller('frais-port')
export class FraisPortController {
  constructor(private readonly fraisPortService: FraisPortService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  async findAll() {

    return await this.fraisPortService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.fraisPortService.findOne(+id);

  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateFraisPortDto: UpdateFraisPortDto) {

    await this.fraisPortService.update(+id, updateFraisPortDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await  this.fraisPortService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
