import { ApiProperty } from "@nestjs/swagger";

export class CreateCurryDto {
    @ApiProperty()
    nom: string;
}
