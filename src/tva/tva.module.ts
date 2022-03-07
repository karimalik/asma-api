import { Module } from '@nestjs/common';
import { TvaService } from './tva.service';
import { TvaController } from './tva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tva } from './entities/tva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tva])],
  controllers: [TvaController],
  providers: [TvaService]
})
export class TvaModule {}
