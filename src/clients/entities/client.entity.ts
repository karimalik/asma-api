import { IsEmail } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

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

    @Column()
    Societe: string;

    @Column()
    civilite: string;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    adresse: string;

    @Column()
    codePostal: string;

    @Column()
    ville: string;

    @Column()
    pays: string;

    @Column()
    telephone: string;

    @Column()
    fax: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    type: string;

    @Column()
    livreMemeAdresse: boolean;

    @Column()
    factureMemeAdresse: boolean;

    @Column()
    exemptTVA: boolean;

    @Column()
    SaisirPar: string;

    @CreateDateColumn()
    SaisirLe: Date;

    @Column()
    AuteurModif: string;

    @UpdateDateColumn()
    DateModif: Date;

    @Column()
    observation: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    DeletedAt: Date;
}
