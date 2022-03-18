import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntreeStockService } from './entree-stock.service';
import { CreateEntreeStockDto } from './dto/create-entree-stock.dto';
import { UpdateEntreeStockDto } from './dto/update-entree-stock.dto';

@Controller('entree-stock')
export class EntreeStockController {
  constructor(private readonly entreeStockService: EntreeStockService) {}

  @Post()
  create(@Body() createEntreeStockDto: CreateEntreeStockDto) {
    return this.entreeStockService.create(createEntreeStockDto);
  }

  @Get()
  findAll() {
    return this.entreeStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entreeStockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntreeStockDto: UpdateEntreeStockDto) {
    return this.entreeStockService.update(+id, updateEntreeStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entreeStockService.remove(+id);
  }
}
