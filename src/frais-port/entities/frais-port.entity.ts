import { IsNotEmpty } from "class-validator";
import { Produit } from "src/produit/entities/produit.entity";
import { Curry } from "src/utils/curry.enum";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";


/** 
* create the entity fraisPort
* @codePort
* @libelle
* @Montant
*/
@Entity()
export class FraisPort {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, unique: true})
    @IsNotEmpty()
    codePort: string;

    @Column({ type: 'varchar', nullable: true })
    libelle: string;

    @Column({ type: 'varchar', nullable: true })
    @IsNotEmpty()
    montant: string;

    @Column({ type: 'enum', enum: Curry, default: Curry.CFA, nullable: true })
    curry: Curry;

    @OneToMany(() => Produit, produit => produit.codePort)
    produit: Produit;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
