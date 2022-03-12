import { ApiProperty } from "@nestjs/swagger";

export class CreateModeReglementDto {
    
    @ApiProperty()
    libModeReglement: string;
}
