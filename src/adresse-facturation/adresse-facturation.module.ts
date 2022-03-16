import { Module } from '@nestjs/common';
import { AdresseFacturationService } from './adresse-facturation.service';
import { AdresseFacturationController } from './adresse-facturation.controller';
import { AdresseFacturation } from './entities/adresse-facturation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AdresseFacturation])],
  controllers: [AdresseFacturationController],
  providers: [AdresseFacturationService]
})
export class AdresseFacturationModule {}
