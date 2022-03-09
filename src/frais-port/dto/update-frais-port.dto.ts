import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateFraisPortDto } from './create-frais-port.dto';

export class UpdateFraisPortDto extends PartialType(CreateFraisPortDto) {
    @ApiProperty()
    @IsNotEmpty()
    codePort: string;

    @ApiProperty()
    libelle: string;

    @ApiProperty()
    @IsNotEmpty()
    montant: string;
}
