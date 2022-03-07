import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateSocieteDto {

    @ApiProperty()
    @IsNotEmpty()
    nom: string;

    @ApiProperty()
    adresse: string;

    @ApiProperty()
    ville: string;

    @ApiProperty()
    telephone: string;

    @ApiProperty()
    fax: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    codePostal: string;
    
    @ApiProperty()
    pays: string;
}
