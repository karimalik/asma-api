import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Curry } from "src/utils/curry.enum";

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
