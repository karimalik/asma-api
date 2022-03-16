import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Client } from 'src/clients/entities/client.entity';
import { CreateAdresseFacturationDto } from './create-adresse-facturation.dto';

export class UpdateAdresseFacturationDto extends PartialType(CreateAdresseFacturationDto) {
    @ApiProperty()
    contact: string;

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
    @IsEmail()
    email: string;

    @ApiProperty()
    client: Client;
}
