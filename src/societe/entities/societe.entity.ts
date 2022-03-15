import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";

/**
* create the entity Societe
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

    @Column({ type: 'varchar', nullable: true, unique: true})
    @IsNotEmpty()
    nom: string;

    @Column({ type: 'varchar', nullable: true })
    adresse: string;

    @Column({ type: 'varchar', nullable: true })
    ville: string;

    @Column({ type: 'varchar', nullable: true })
    telephone: string;

    @Column({ type: 'varchar', nullable: true })
    fax: string;

    @Column({ type: 'varchar', nullable: true })
    @IsEmail()
    email: string;

    @Column({ type: 'varchar', nullable: true })
    logo: string;

    @Column({ type: 'varchar', nullable: true })
    pays: string;

    @Column({ type: 'varchar', nullable: true })
    codePostal: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
