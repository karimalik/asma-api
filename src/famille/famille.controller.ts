import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
import { ApiTags } from '@nestjs/swagger';
import { Famille } from './entities/famille.entity';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  async create(@Body() createFamilleDto: CreateFamilleDto): Promise<Famille>  {

    return await  this.familleService.create(createFamilleDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Famille[]>  {

    return await this.familleService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.familleService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateFamilleDto: UpdateFamilleDto) {

    await this.familleService.update(+id, updateFamilleDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    
    await this.familleService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }

  @Delete('remove/:id')
  @UseGuards(JwtAuthGuard)
  async DeleteData(@Param('id') id: number) {

    return await this.familleService.softDeleteData(id);

  }

  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restoreResponse(@Param('id') id: string) {

    await this.familleService.restoreData(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data restored successfully',
    };
  }
}
