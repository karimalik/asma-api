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

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readRole = await this.roleRepository.findOne({ where: { id: id } });

    return readRole;
  }

  /*
  * this function update the data
  * @Params: id
  */
  async update(id: number, updateRoleDto: UpdateRoleDto) {

    await this.roleRepository.update({ id }, updateRoleDto);

    return this.roleRepository.findOne({ id });
  }

  /*
  * this function delete the data in the database
  * @Params: id
  */
  async remove(id: number) {

    await this.roleRepository.delete({ id });
    
    return { deleted: true};
  }
}
