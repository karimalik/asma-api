import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor( @InjectRepository(Client) private clientRepository: Repository<Client>) {}

  /*
  * this function create new data
  * @params: id, createClientDto
  */
  async create(createClientDto: CreateClientDto, user): Promise<Client>{
    
    const client = this.clientRepository.create(createClientDto);

    client.SaisirPar = user.nom;
    // client.AuteurModif = user.nom;

    await this.clientRepository.save(client);

    return client;
  }

  //function to list all data in the database
  async findAll() {

    return await this.clientRepository.find();

  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readUser = await this.clientRepository.findOne({ where: { id: id } });

    if (!readUser) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readUser;
  }

  /*
  * this function update the data
  * @Params: id, updateClientDto
  */
  async update(id: number, updateClientDto: UpdateClientDto, user): Promise<Client> {
    
    const updateData = await this.clientRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found')
    }

    updateClientDto.AuteurModif = user.nom;

    await this.clientRepository.update({ id }, updateClientDto);

    return updateData;
  }

  /*
  * this function delete the data in the database
  * @Params: id
  */
  async remove(id: number) {
    
    await this.clientRepository.delete({ id });

    return{ deleted: true };
  }
}
