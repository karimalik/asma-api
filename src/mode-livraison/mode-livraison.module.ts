import { Module } from '@nestjs/common';
import { ModeLivraisonService } from './mode-livraison.service';
import { ModeLivraisonController } from './mode-livraison.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeLivraison } from './entities/mode-livraison.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModeLivraison])],
  controllers: [ModeLivraisonController],
  providers: [ModeLivraisonService]
})
export class ModeLivraisonModule {}
