import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateModeReglementDto } from './create-mode-reglement.dto';

export class UpdateModeReglementDto extends PartialType(CreateModeReglementDto) {
    @ApiProperty()
    libModeReglement: string;
}
