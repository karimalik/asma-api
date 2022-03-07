import { Module } from '@nestjs/common';
import { SocieteService } from './societe.service';
import { SocieteController } from './societe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Societe } from './entities/societe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Societe])],
  controllers: [SocieteController],
  providers: [SocieteService]
})
export class SocieteModule {}
