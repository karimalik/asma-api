import { ApiProperty } from "@nestjs/swagger";

export class CreateActionPossibleDto {
    @ApiProperty()
    LibAction: string;
}
