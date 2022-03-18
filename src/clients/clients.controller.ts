import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { User } from 'src/shared/decorators/user.decorator';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';
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
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createClientDto: CreateClientDto, 
    @User() user
    ) {

    const client = await this.clientsService.create(createClientDto, user);
    return {
     statusCode: HttpStatus.OK,
     message: 'client create successfully',
     client
    };
  }

  /**
   * 
   * @returns 
   */
  @Get('stats')
  @UseGuards(JwtAuthGuard)
  async clientStats() {
    return await this.clientsService.ClientsStats();
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {

    return await this.clientsService.findAll();

  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.clientsService.findOne(+id);

  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  // @ApiBody({ description: "update the record"})
  async update(
    @Param('id') id: string, 
    @Body() updateClientDto: UpdateClientDto,
    @User() user
    ) {

    await this.clientsService.update(+id, updateClientDto, user);
    return { 
      statusCode: HttpStatus.OK,
      message: 'user updated successfully'
     };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.clientsService.remove(+id);
    
    return { 
      statusCode: HttpStatus.OK,
      message: 'user deleted successfully',
    } ;
  }

  @Delete('remove/:id')
  @UseGuards(JwtAuthGuard)
  async DeleteData(@Param('id') id: number) {

    return await this.clientsService.softDeleteData(id);

  }

  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restoreResponse(@Param('id') id: string) {

    await this.clientsService.restoreData(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data restored successfully',
    };
  }
}
