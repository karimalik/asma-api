import { Module } from '@nestjs/common';
import { ActionPossibleService } from './action-possible.service';
import { ActionPossibleController } from './action-possible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionPossible } from './entities/action-possible.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActionPossible])],
  controllers: [ActionPossibleController],
  providers: [ActionPossibleService]
})
export class ActionPossibleModule {}
