import { IsEmail } from "class-validator";
import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    Timestamp, 
    UpdateDateColumn 
} from "typeorm";

/*
* create the entity clients
* @params
* @societe
* @civilite
* @nom
* @prenom
* @adresse
* @codePostal
* @ville
* @pays
* @telephone
* @fax
* @email
* @type
* @livreMemeAdresse
* @factureMemeAdresse
* @exemptTVA
* @saisirPar
* @saisirLe
* @AuteurModif
* @dateModif
* @observation
*/
@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true })
    Societe: string;

    @Column({ type: 'varchar', nullable: true })
    civilite: string;

    @Column({ type: 'varchar', nullable: true,  unique: true })
    nom: string;

    @Column({ type: 'varchar', nullable: true })
    prenom: string;

    @Column({ type: 'varchar', nullable: true })
    adresse: string;

    @Column({ type: 'varchar', nullable: true })
    codePostal: string;

    @Column({ type: 'varchar', nullable: true })
    ville: string;

    @Column({ type: 'varchar', nullable: true })
    pays: string;

    @Column({ type: 'varchar', nullable: true })
    telephone: string;

    @Column({ type: 'varchar', nullable: true })
    fax: string;

    @Column({ type: 'varchar', nullable: true })
    @IsEmail()
    email: string;

    @Column({ type: 'varchar', nullable: true })
    type: string;

    @Column({ type: 'varchar', nullable: true })
    livreMemeAdresse: boolean;

    @Column({ type: 'varchar', nullable: true })
    factureMemeAdresse: boolean;

    @Column({ type: 'varchar', nullable: true })
    exemptTVA: boolean;

    @Column({ type: 'varchar', nullable: true })
    SaisirPar: string;

    @CreateDateColumn()
    SaisirLe: Date;

    @Column({ type: 'varchar', nullable: true })
    AuteurModif: string;

    @UpdateDateColumn()
    DateModif: Date;

    @Column({ type: 'varchar', nullable: true })
    observation: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
