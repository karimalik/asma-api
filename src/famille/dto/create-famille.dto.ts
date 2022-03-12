import { ApiProperty } from "@nestjs/swagger";

export class CreateFamilleDto {
    @ApiProperty()
    codeFamille: string;

    @ApiProperty()
    libelle: string;
}
