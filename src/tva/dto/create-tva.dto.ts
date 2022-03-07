import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateTvaDto {

    @ApiProperty()
    TauxTva: string;
}
