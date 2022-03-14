import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModeReglementDto } from './dto/create-mode-reglement.dto';
import { UpdateModeReglementDto } from './dto/update-mode-reglement.dto';
import { ModeReglement } from './entities/mode-reglement.entity';

@Injectable()
export class ModeReglementService {

  constructor(@InjectRepository(ModeReglement) private reglementRepository: Repository<ModeReglement>) {}

  /*
  * this function create new data
  * @params: createModeReglementDto
  */
  async create(createModeReglementDto: CreateModeReglementDto): Promise<ModeReglement> {

    const createData = await this.reglementRepository.create(createModeReglementDto);

    await this.reglementRepository.save(createModeReglementDto);

    return createData;
  }

  //function for list all data in database
  async findAll(): Promise<ModeReglement[]> {

    return await this.reglementRepository.find();
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.reglementRepository.findOne({ where: { id: id } });

    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readData;
  }

   /*
  * this function update the data
  * @Params: id, updateModeReglementDto
  */
  async update(id: number, updateModeReglementDto: UpdateModeReglementDto) {

    const updateData = await this.reglementRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found');
    }

    await this.reglementRepository.update({ id }, updateModeReglementDto);

    return updateData;
  }

  /*
  * this function delete the data 
  * @Params: id
  */
  async remove(id: number) {

    await this.reglementRepository.delete({ id })

    return { deleted: true };
  }

  async softDeleteData(id: number) {

    const deleteResponse = await this.reglementRepository.softDelete(id);

    if (!deleteResponse) {
      throw new NotFoundException('not exists');
    }

    return deleteResponse;
  }

  async restoreData(id: number) {

    const restoreData = await this.reglementRepository.restore(id);

    if (!restoreData) {

      throw new NotFoundException('not exists');
    }

    return restoreData;
  }
}
