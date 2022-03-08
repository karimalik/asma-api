import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
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
    type: string;

    @ApiProperty()
    livreMemeAdresse: boolean;

    @ApiProperty()
    factureMemeAdresse: boolean;

    @ApiProperty()
    exemptTVA: boolean;

    @ApiProperty()
    SaisirPar: string;

    @ApiProperty()
    SaisirLe: string;

    @ApiProperty()
    AuteurModif: string;

    @ApiProperty()
    DateModif: string;
    
    @ApiProperty()
    observation: string;
}
