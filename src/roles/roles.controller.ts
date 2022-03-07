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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiTags } from '@nestjs/swagger';

 /*
  * Route & controllers
  * @Post
  * @Get
  * @Put
  * create, findAll, findOne, Update, remove
  * @Params: id
  */
@ApiTags('Role ressource')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {

    const createRole = await this.rolesService.create(createRoleDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'Role created successfully',
      createRole
    };
  }

  @Get()
  async findAll() {

    const roles = await this.rolesService.findAll();

    return {
      statusCode: HttpStatus.OK,
      message: 'fetched roles successfully',
      roles
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const findRole = await this.rolesService.findOne(+id);

    return { 
      statusCode: HttpStatus.OK,
      message: 'fetched role successfully',
      findRole
     };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {

    await this.rolesService.update(+id, updateRoleDto);

    return { 
      statusCode: HttpStatus.OK,
      message: 'data updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.rolesService.remove(+id);

    return {
      statusCode: HttpStatus.OK,
      message: 'data deleted successfully',
    }
  }
}
