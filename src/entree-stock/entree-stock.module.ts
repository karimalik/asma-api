import { Module } from '@nestjs/common';
import { EntreeStockService } from './entree-stock.service';
import { EntreeStockController } from './entree-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntreeStock } from './entities/entree-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntreeStock])],
  controllers: [EntreeStockController],
  providers: [EntreeStockService]
})
export class EntreeStockModule {}
