import { Module } from '@nestjs/common';
import { EntreeStockService } from './entree-stock.service';
import { EntreeStockController } from './entree-stock.controller';

@Module({
  controllers: [EntreeStockController],
  providers: [EntreeStockService]
})
export class EntreeStockModule {}
