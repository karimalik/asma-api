import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
  async findAll() {

    const actions = await this.actionPossibleService.findAll();

    return {
      statusCode: HttpStatus.OK,
      message: 'data fetched successfully',
      actions
    } ;
  }

  //route to read data by id
  @Get(':id')
  async findOne(@Param('id') id: string) {

    const action = await this.actionPossibleService.findOne(+id);
    
    return {
      statusCode: HttpStatus.OK,
      message: 'data fetched successfully',
      action
    } ;
  }

  //route to update data
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateActionPossibleDto: UpdateActionPossibleDto) {

    await this.actionPossibleService.update(+id, updateActionPossibleDto);

    return{ 
      statusCode: HttpStatus.OK,
      message: 'data updated successfully'
    } ;
  }

  //route to delete data
  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.actionPossibleService.remove(+id);

    return{
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    } ;
  }
}
