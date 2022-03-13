import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ModeReglementService } from './mode-reglement.service';
import { CreateModeReglementDto } from './dto/create-mode-reglement.dto';
import { UpdateModeReglementDto } from './dto/update-mode-reglement.dto';
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
@ApiTags('mode reglement ressource')
@Controller('mode-reglement')
export class ModeReglementController {
  constructor(private readonly modeReglementService: ModeReglementService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createModeReglementDto: CreateModeReglementDto) {

    const createData = await this.modeReglementService.create(createModeReglementDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      createData
     };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.modeReglementService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.modeReglementService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateModeReglementDto: UpdateModeReglementDto) {

    const updateData = await this.modeReglementService.update(+id, updateModeReglementDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    const deleteData = await this.modeReglementService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    }; 
  }
}
