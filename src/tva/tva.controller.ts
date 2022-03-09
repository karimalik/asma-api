import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpStatus, 
  Put
} from '@nestjs/common';
import { TvaService } from './tva.service';
import { CreateTvaDto } from './dto/create-tva.dto';
import { UpdateTvaDto } from './dto/update-tva.dto';
import { ApiTags } from '@nestjs/swagger';

/*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, updateSocieteDto, createSocieteDto
*/
@ApiTags('TVA ressource')
@Controller('tva')
export class TvaController {
  constructor(private readonly tvaService: TvaService) {}

  //route to create new record
  @Post()
  async create(@Body() createTvaDto: CreateTvaDto) {

    const tva = await this.tvaService.create(createTvaDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      tva
    } ;
  }

  //route to read all data
  @Get()
  async findAll() {

    const allData = await this.tvaService.findAll();

    return {
      statusCode: HttpStatus.OK,
      message: 'data fetched successfully',
      allData
    };
  }

  //route to read data
  @Get(':id')
  async findOne(@Param('id') id: string) {

    const data = await this.tvaService.findOne(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data fetched successfully',
      data
    };
  }

  //route to update data
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTvaDto: UpdateTvaDto) {

    await this.tvaService.update(+id, updateTvaDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  //route to delete data
  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.tvaService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully'
    };
  }
}
