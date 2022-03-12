import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurryService } from './curry.service';
import { CreateCurryDto } from './dto/create-curry.dto';
import { UpdateCurryDto } from './dto/update-curry.dto';

@ApiTags('Curry ressource')
@Controller('curry')
export class CurryController {
  constructor(private readonly curryService: CurryService) {}

  @Post()
  async create(@Body() createCurryDto: CreateCurryDto) {
    const createData = await this.curryService.create(createCurryDto);

    if (HttpStatus.OK) {
      return {
        message: 'data added successfully',
        createData,
      }
    }
    else {
      return {
        message: 'Error'
      };
    }
  }

  @Get()
  async findAll() {

    return await  this.curryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    return await this.curryService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCurryDto: UpdateCurryDto) {
    
    await this.curryService.update(+id, updateCurryDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.curryService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    };
  }
}
