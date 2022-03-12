import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFournisseurDto } from './create-fournisseur.dto';

export class UpdateFournisseurDto extends PartialType(CreateFournisseurDto) {
    @ApiProperty()
    Societe: string;

    @ApiProperty()
    civilite: string;

    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    adresse: string;

    @ApiProperty()
    codePostal: string;

    @ApiProperty()
    ville: string;

    @ApiProperty()
    pays: string;

    @ApiProperty()
    telephone: string;

    @ApiProperty()
    fax: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    observation: string;
}
