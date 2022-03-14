import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('user ressource')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {

    // return await this.usersService.signUp(createUserDto);

    const register = await this.usersService.signUp(createUserDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'user created successfully',
      register,
    };
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {

    const login = await this.usersService.signIn(loginUserDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'you are login',
      login,
    };

  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
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
      message: 'Your profil was deleted',
    };
  }
}
