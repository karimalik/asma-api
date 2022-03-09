import { Module } from '@nestjs/common';
import { FraisPortService } from './frais-port.service';
import { FraisPortController } from './frais-port.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FraisPort } from './entities/frais-port.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FraisPort])],
  controllers: [FraisPortController],
  providers: [FraisPortService]
})
export class FraisPortModule {}
