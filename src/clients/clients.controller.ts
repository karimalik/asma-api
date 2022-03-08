import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@ApiTags('Clients ressource')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  /*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id
  */
  @Post()
  async create(@Body() createClientDto: CreateClientDto) {

    const client = await this.clientsService.create(createClientDto);
    return {
     statusCode: HttpStatus.OK,
     message: 'client create successfully',
     client
    };
  }

  @Get()
  async findAll() {

    const users = this.clientsService.findAll();

    return { 
      statusCode: HttpStatus.OK,
      message: 'Clients fetched successfully',
      users,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    const data = this.clientsService.findOne(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'user fetched successfully',
      data,
    };
  }

  @Put(':id')
  // @ApiBody({ description: "update the record"})
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {

    await this.clientsService.update(+id, updateClientDto);
    return { 
      statusCode: HttpStatus.OK,
      message: 'user updated successfully'
     };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.clientsService.remove(+id);
    return { 
      statusCode: HttpStatus.OK,
      message: 'user deleted successfully',
    } ;
  }
}
