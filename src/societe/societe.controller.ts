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
import { SocieteService } from './societe.service';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
import { ApiTags } from '@nestjs/swagger';

  /*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, updateSocieteDto, createSocieteDto
  */
@ApiTags('Societe ressource')
@Controller('societe')
export class SocieteController {

  constructor(private readonly societeService: SocieteService) {}

  //route to create new record
  @Post()
  async create(@Body() createSocieteDto: CreateSocieteDto) {

    const societe = await this.societeService.create(createSocieteDto);

    return { 
      statusCode: HttpStatus.OK,
      message: 'data created successfully',
      societe
     };
  }

  //route to findAll society
  @Get()
  async findAll() {

    return await this.societeService.findAll();

    // const societes = await this.societeService.findAll();

    // return { 
    //   statusCode: HttpStatus.OK,
    //   message: 'data fetched successfully',
    //   societes
    //  };
  }

  //route to read record
  @Get(':id')
  async findOne(@Param('id') id: string) {

    return await this.societeService.findOne(+id);

    // const readData = await this.societeService.findOne(+id);

    // return{
    //   statusCode: HttpStatus.OK,
    //   message: 'data fetched successfully',
    //   readData
    // };
  }

  //route to upadte data
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSocieteDto: UpdateSocieteDto) {

    await this.societeService.update(+id, updateSocieteDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    }
  }

  //route to delete data
  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.societeService.remove(+id);
    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
