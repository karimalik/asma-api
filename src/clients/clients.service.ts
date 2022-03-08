import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor( @InjectRepository(Client) private clientRepository: Repository<Client>) {}

  //create a new client
  async create(createClientDto: CreateClientDto): Promise<Client>{
    
    const client = this.clientRepository.create(createClientDto);

    await this.clientRepository.save(createClientDto);

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

    return readUser;
  }

  /*
  * this function update the data
  * @Params: id
  */
  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    
    await this.clientRepository.update({ id }, updateClientDto);

    return await this.clientRepository.findOne({ id });
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
