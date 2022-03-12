import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateModeLivraisonDto } from './create-mode-livraison.dto';

export class UpdateModeLivraisonDto extends PartialType(CreateModeLivraisonDto) {
    @ApiProperty()
    libModeLivraison: string;
}
