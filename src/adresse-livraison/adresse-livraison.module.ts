import { Module } from '@nestjs/common';
import { AdresseLivraisonService } from './adresse-livraison.service';
import { AdresseLivraisonController } from './adresse-livraison.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresseLivraison } from './entities/adresse-livraison.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdresseLivraison])],
  controllers: [AdresseLivraisonController],
  providers: [AdresseLivraisonService]
})
export class AdresseLivraisonModule {}
