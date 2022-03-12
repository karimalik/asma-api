import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCurryDto } from './create-curry.dto';

export class UpdateCurryDto extends PartialType(CreateCurryDto) {
    @ApiProperty()
    nom: string;
}
