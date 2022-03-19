import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EntreeStockService } from './entree-stock.service';
import { CreateEntreeStockDto } from './dto/create-entree-stock.dto';
import { UpdateEntreeStockDto } from './dto/update-entree-stock.dto';
import { User } from 'src/shared/decorators/user.decorator';
import { JwtAuthGuard } from 'src/users/guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { EntreeStock } from './entities/entree-stock.entity';

@ApiTags('Entree Stock ressource')
@Controller('entree-stock')
export class EntreeStockController {
  constructor(private readonly entreeStockService: EntreeStockService) {}

  /**
   * 
   * @param createEntreeStockDto 
   * @param user 
   * @returns 
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createEntreeStockDto: CreateEntreeStockDto,
    @User() user
    ): Promise<EntreeStock> {
    return this.entreeStockService.create(createEntreeStockDto, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<EntreeStock[]> {
    return await this.entreeStockService.findAll();
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
