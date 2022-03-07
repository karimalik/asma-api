import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateSocieteDto } from './create-societe.dto';

export class UpdateSocieteDto extends PartialType(CreateSocieteDto) {
    @ApiProperty()
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
