import { Injectable } from '@nestjs/common';
import { CreateEntreeStockDto } from './dto/create-entree-stock.dto';
import { UpdateEntreeStockDto } from './dto/update-entree-stock.dto';

@Injectable()
export class EntreeStockService {
  create(createEntreeStockDto: CreateEntreeStockDto) {
    return 'This action adds a new entreeStock';
  }

  findAll() {
    return `This action returns all entreeStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entreeStock`;
  }

  update(id: number, updateEntreeStockDto: UpdateEntreeStockDto) {
    return `This action updates a #${id} entreeStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} entreeStock`;
  }
}
