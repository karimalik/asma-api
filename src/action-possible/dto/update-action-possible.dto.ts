import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateActionPossibleDto } from './create-action-possible.dto';

export class UpdateActionPossibleDto extends PartialType(CreateActionPossibleDto) {
    @ApiProperty()
    LibAction: string;
}
