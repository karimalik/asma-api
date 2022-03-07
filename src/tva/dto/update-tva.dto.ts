import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateTvaDto } from './create-tva.dto';

export class UpdateTvaDto extends PartialType(CreateTvaDto) {

    @ApiProperty()
    TauxTva: string;
}
