import { IsNotEmpty, IsNumber } from "class-validator";
import { Produit } from "src/produit/entities/produit.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

/** 
* create the entity Tva
* @TauxTva
*/
@Entity()
export class Tva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, unique: true })
    @IsNotEmpty()
    TauxTva: string;

    @OneToMany(() => Produit, produit => produit.TauxTva)
    produit: Produit[];

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
    
}
