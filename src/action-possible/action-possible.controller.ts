import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';
import { ActionPossibleService } from './action-possible.service';
import { CreateActionPossibleDto } from './dto/create-action-possible.dto';
import { UpdateActionPossibleDto } from './dto/update-action-possible.dto';

 /*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id, updateSocieteDto, createSocieteDto
  */
@ApiTags('Action possible ressource')
@Controller('action-possible')
export class ActionPossibleController {
  constructor(private readonly actionPossibleService: ActionPossibleService) {}

  //route to add new record
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createActionPossibleDto: CreateActionPossibleDto) {

    const createAction = await this.actionPossibleService.create(createActionPossibleDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'data added successfully',
      createAction
    } ;
  }

  //route to read all data
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {

    return await this.actionPossibleService.findAll();

    // const actions = await this.actionPossibleService.findAll();

    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'data fetched successfully',
    //   actions
    // } ;
  }

  //route to read data by id
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {

    return await this.actionPossibleService.findOne(+id);

    // const action = await this.actionPossibleService.findOne(+id);
    
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'data fetched successfully',
    //   action
    // } ;
  }

  //route to update data
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateActionPossibleDto: UpdateActionPossibleDto) {

    await this.actionPossibleService.update(+id, updateActionPossibleDto);

    return{ 
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    } ;
  }

  //route to delete data
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {

    await this.actionPossibleService.remove(+id);

    return{
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    } ;
  }
}
