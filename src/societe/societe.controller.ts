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
import { SocieteService } from './societe.service';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
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
@ApiTags('Societe ressource')
@Controller('societe')
export class SocieteController {

  constructor(private readonly societeService: SocieteService) {}

  //route to create new record
  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  async findAll() {

    return await this.societeService.findAll();
  }

  //route to read record
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.societeService.findOne(+id);

  }

  //route to upadte data
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateSocieteDto: UpdateSocieteDto) {

    await this.societeService.update(+id, updateSocieteDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    }
  }

  //route to delete data
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.societeService.remove(+id);
    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
