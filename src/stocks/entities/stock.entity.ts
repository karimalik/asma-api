import { Produit } from "src/produit/entities/produit.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

/**
 * @Reference
 * @QteEnStock
 * @QteStockVirtuel
 * @AuteurModif
 * @DateModif
 */
@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    QteEnStock: string;

    @Column()
    QteStockVirtuel: string;

    @OneToOne(
        ()  => Produit,
    )
    @JoinColumn()
    Reference: Produit;
}
