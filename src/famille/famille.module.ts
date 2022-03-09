import { Module } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { FamilleController } from './famille.controller';

@Module({
  controllers: [FamilleController],
  providers: [FamilleService]
})
export class FamilleModule {}
