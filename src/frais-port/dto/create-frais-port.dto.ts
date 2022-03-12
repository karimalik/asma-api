import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Curry } from "src/curry/entities/curry.entity";

export class CreateFraisPortDto {
    @ApiProperty()
    @IsNotEmpty()
    codePort: string;

    @ApiProperty()
    libelle: string;

    @ApiProperty()
    @IsNotEmpty()
    montant: string;

    @ApiProperty()
    curry: Curry;
}
