import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";

/*
* create the entity clients
* @params
* @nom
* @adresse
* @codePostal
* @ville
* @pays
* @telephone
* @fax
* @email
* @logo
*/
@Entity()
export class Societe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nom: string;

    @Column()
    adresse: string;

    @Column()
    ville: string;

    @Column()
    telephone: string;

    @Column()
    fax: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    logo: string;

    @Column()
    pays: string;

    @Column()
    codePostal: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
