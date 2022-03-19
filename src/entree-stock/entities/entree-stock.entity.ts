import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Curry } from "src/utils/curry.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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
      type: 'varchar', 
      nullable: true, 
      name: 'dateAppro'
    })
    dateAppro: string;

    @ManyToOne(
        () => Fournisseur,
        fournisseur => fournisseur.EntreStock,
        {onDelete: 'SET NULL'},
        
    )
    NumFournisseur: Fournisseur;

    @ManyToOne(
        () => Produit,
        produit => produit.EntreStock,
        {onDelete: 'SET NULL'}
    )
    Reference: Produit;

    @Column({
        type: 'varchar', 
        nullable: true, 
        name: 'quantite'
    })
    quantite: string;

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

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
