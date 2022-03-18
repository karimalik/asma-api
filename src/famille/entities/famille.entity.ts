import { Produit } from "src/produit/entities/produit.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
* create the entity Famille
* @codeFamille
* @libelle
* @id
*/
@Entity()
export class Famille {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, unique: true})
    codeFamille: string;

    @Column({ type: 'varchar', nullable: true})
    libelle: string;

    @ManyToOne(
        () => Produit, 
        produit => produit.codeFamille
    )
    produit: Produit[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
