import { ApiProperty } from "@nestjs/swagger";

export class CreateModeLivraisonDto {
    @ApiProperty()
    libModeLivraison: string;
}
