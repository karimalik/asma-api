import { Module } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { FamilleController } from './famille.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Famille } from './entities/famille.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Famille])],
  controllers: [FamilleController],
  providers: [FamilleService]
})
export class FamilleModule {}
