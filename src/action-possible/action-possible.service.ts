import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActionPossibleDto } from './dto/create-action-possible.dto';
import { UpdateActionPossibleDto } from './dto/update-action-possible.dto';
import { ActionPossible } from './entities/action-possible.entity';

@Injectable()
export class ActionPossibleService {

  constructor(@InjectRepository(ActionPossible) private actionRepository: Repository<ActionPossible>) {}

  /*
  * this function create new data
  * @params: createActionPossibleDto
  */
  async create(createActionPossibleDto: CreateActionPossibleDto) {

    const createAction = await this.actionRepository.create(createActionPossibleDto);

    await this.actionRepository.save(createActionPossibleDto);

    return createAction;
  }


  async findAll() {

    return await this.actionRepository.find();
  }

  /*
  * this function read the data
  * @params: id
  */
  async findOne(id: number) {

    const readData = await this.actionRepository.findOne({ where: { id: id } });

    if (!readData) {
      throw new NotFoundException(`The data with id #${id} was not found`);
    }

    return readData;
  }

  /*
  * this function update the data
  * @Params: id, updateActionPossibleDto
  */
  async update(id: number, updateActionPossibleDto: UpdateActionPossibleDto) {

    const updateData = await this.actionRepository.findOne({ id });

    if (!updateData) {
      throw new NotFoundException('Not found');
    }

    await this.actionRepository.update({ id }, updateActionPossibleDto);

    return updateData;
  }

  /*
  * this function delete the data in the database
  * @Params: id
  */
  async remove(id: number) {

    await this.actionRepository.delete({ id });

    return { deleted: true };
  }

  async findById(id: number) {
    const verify = await this.actionRepository.findOne(id);
    if (!verify) {
      throw new NotFoundException('the data does not exist');
    }
    return verify;
  }

  //function for partial delete
  async softDeleteData(id: number) {

    const deleteResponse = await this.actionRepository.softDelete(id);

    if (!deleteResponse) {
      throw new NotFoundException('not exists');
    }

    return deleteResponse;
  }

  async restoreData(id: number) {

    const restoreData = await this.actionRepository.restore(id);

    if (!restoreData) {

      throw new NotFoundException('not exists');
    }

    return restoreData;
  }
}
