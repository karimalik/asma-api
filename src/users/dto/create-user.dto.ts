import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty  } from "class-validator";
import { Roles } from "src/utils/role.enum";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    nom: string;
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    

}
