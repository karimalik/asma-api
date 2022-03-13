import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpStatus, 
  Put,
  UseGuards
} from '@nestjs/common';
import { TvaService } from './tva.service';
import { CreateTvaDto } from './dto/create-tva.dto';
import { UpdateTvaDto } from './dto/update-tva.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  async findAll() {

    return await await this.tvaService.findAll();
  }

  //route to read data
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.tvaService.findOne(+id);
  }

  //route to update data
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateTvaDto: UpdateTvaDto) {

    await this.tvaService.update(+id, updateTvaDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    };
  }

  //route to delete data
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.tvaService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully'
    };
  }
}
