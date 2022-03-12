import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ModeReglementService } from './mode-reglement.service';
import { CreateModeReglementDto } from './dto/create-mode-reglement.dto';
import { UpdateModeReglementDto } from './dto/update-mode-reglement.dto';
import { ApiTags } from '@nestjs/swagger';


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
  async create(@Body() createModeReglementDto: CreateModeReglementDto) {

    const createData = await this.modeReglementService.create(createModeReglementDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      createData
     };
  }

  @Get()
  async findAll() {
    return await this.modeReglementService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.modeReglementService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateModeReglementDto: UpdateModeReglementDto) {

    const updateData = await this.modeReglementService.update(+id, updateModeReglementDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    const deleteData = await this.modeReglementService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    }; 
  }
}
