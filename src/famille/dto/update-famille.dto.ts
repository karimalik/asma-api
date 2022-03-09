import { PartialType } from '@nestjs/swagger';
import { CreateFamilleDto } from './create-famille.dto';

export class UpdateFamilleDto extends PartialType(CreateFamilleDto) {}
