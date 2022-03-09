import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFraisPortDto {
    @ApiProperty()
    @IsNotEmpty()
    codePort: string;

    @ApiProperty()
    libelle: string;

    @ApiProperty()
    @IsNotEmpty()
    montant: string;
}
