import { Module } from '@nestjs/common';
import { CurryService } from './curry.service';
import { CurryController } from './curry.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curry } from './entities/curry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curry])],
  controllers: [CurryController],
  providers: [CurryService]
})
export class CurryModule {}
