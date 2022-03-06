import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepositiry: Repository<User>){}

  async create(createUserDto: CreateUserDto) {

    const user = this.userRepositiry.create(createUserDto);

    await this.userRepositiry.save(createUserDto);

    return user;
  }

  async findByEmail(email: string) {

    return await this.userRepositiry.findOne({ where: email });

  }

  async findById(id: number) {

    return await this.userRepositiry.findOne({ where: { id: id }});
  }

  async showById(id: number) {

    const user = await this.findById(id);

    delete user.password;

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {

    await this.userRepositiry.delete({ id })
    return { deleted: true };
  }
}
