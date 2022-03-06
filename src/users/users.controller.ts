import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpStatus 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User ressource')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {

    const user = this.usersService.create(createUserDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'user create successfully',
      user,
    };
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

   @Delete(':id')
  async remove(@Param('id') id: string) {

    await this.usersService.remove(+id);
    return { 
      statusCode: HttpStatus.OK,
      message: 'user deleted successfully',
    } ;
  }
}
