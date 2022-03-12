import { Module } from '@nestjs/common';
import { ModeReglementService } from './mode-reglement.service';
import { ModeReglementController } from './mode-reglement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeReglement } from './entities/mode-reglement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModeReglement])],
  controllers: [ModeReglementController],
  providers: [ModeReglementService]
})
export class ModeReglementModule {}
