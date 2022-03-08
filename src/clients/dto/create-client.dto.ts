import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CreateClientDto {
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
    @IsEmail()
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
    AuteurModif: string;
    
    @ApiProperty()
    observation: string;
}
