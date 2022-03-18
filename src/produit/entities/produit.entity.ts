import { Famille } from "src/famille/entities/famille.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { FraisPort } from "src/frais-port/entities/frais-port.entity";
import { Tva } from "src/tva/entities/tva.entity";
import { Curry } from "src/utils/curry.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * @id
 * @reference
 * @GenCode code barre fabircant
 * @CodeBarre code barre interne
 * @LibProd libelle produit
 * @Description
 * @PrixHt prixunitaire Ht
 * @QteReappro quantite réapprovisionnement
 * @QteMini stcok alerte
 * @TauxTva cle issue de la table TauxTva
 * @photos image produit
 * @NumFournisseur numéro fournisseur cle issue de la table fournisseur
 * @SaisirPar
 * @SaisirLe
 * @CodeFamille code famille clé issue de la table famille
 * @CodePort clé issue de la table FraisPort
 * @Observation
 * 
 */
@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'reference',
        unique: true,
    })
    reference: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'GenCode'
    })
    GenCode: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'CodeBarre'
    })
    CodeBarre: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'LibProd'
    })
    LibProd: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'Description'
    })
    Description: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'PrixHt'
    })
    PrixHt: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'QteReappro'
    })
    QteReappro: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'QteMini'
    })
    QteMini: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'photos'
    })
    photos: string;

    @ManyToOne(
        () => Fournisseur, 
        fournisseur => fournisseur.produit, 
        {onDelete: 'SET NULL'}
    )
    NumFournisseur: Fournisseur;

    @ManyToOne(
        () => Tva, 
        tauxTva => tauxTva.produit,
        {onDelete: 'SET NULL'}
    )
    TauxTva: Tva;

    @ManyToOne(
        () => FraisPort, 
        codePort => codePort.produit,
        {onDelete: 'SET NULL'}
    )
    codePort: FraisPort;

    @ManyToOne(
        () => Famille,
        codeFamille => codeFamille.produit,
        {onDelete: 'SET NULL'}
    )
    codeFamille: Famille;

    @Column({ 
        type: 'enum', 
        enum: Curry, 
        default: Curry.CFA, 
        nullable: true 
    })
    curry: Curry;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'Observation'
    })
    Observation: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'SaisirPar'
    })
    SaisirPar: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
        name: 'AuteurModif'
    })
    AuteurModif: string;

   @CreateDateColumn({ name: 'SaisirLe' })
    SaisirLe: Date;

    @UpdateDateColumn({ name: 'DateModif'})
    DateModif

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deleted_at: Date;
}
