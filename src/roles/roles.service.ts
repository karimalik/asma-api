import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {}

  async create(createRoleDto: CreateRoleDto) {

    const role =  this.roleRepository.create(createRoleDto);

    await this.roleRepository.save(createRoleDto);

    return role;
  }

  async findAll() {

    return await this.roleRepository.find();
  }

  async findOne(id: number) {

    const readRole = await this.roleRepository.findOne({ where: { id: id } });

    return readRole;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
