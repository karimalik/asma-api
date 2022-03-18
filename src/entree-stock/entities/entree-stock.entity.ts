import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


/**
 * @id
 * @NumFournisseur
 * @Reference
 * @quantite
 * @PrixAchat
 * @saisirPar
 * @AuteurModif
 * @dateAppro
 */
@Entity()
export class EntreeStock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: 'date', 
      nullable: true, 
      name: 'dateAppro'
    })
    dateAppro: Date;

    @ManyToOne(
        () => Fournisseur,
        fournisseur => fournisseur.EntreStock,
        {onDelete: 'SET NULL'}
    )
    NumFournisseur: Fournisseur;

    @ManyToOne(
        () => Produit,
        produit => produit.EntreStock,
        {onDelete: 'SET NULL'}
    )
    Reference: Produit;

    @Column({
        type: 'numeric', 
        nullable: true, 
        name: 'quantite'
    })
    quantite: number;

    @Column({
      type: 'numeric', 
      nullable: true, 
      name: 'prixAchat'
    })
    prixAchat: string;

    @Column({
        type: 'varchar', 
        nullable: true, 
        name: 'saisirPar'
    })
    saisirPar: string;

    @Column({
        type: 'varchar', 
        nullable: true, 
        name: 'AuteurModif'
    })
    AuteurModif: string;

    @CreateDateColumn({ name: 'saisirLe' })
    saisirLe: Date;

    @UpdateDateColumn({ name: 'dateModif'})
    DateModif: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @CreateDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
