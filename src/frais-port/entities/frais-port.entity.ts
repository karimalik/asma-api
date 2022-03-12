import { IsNotEmpty } from "class-validator";
import { Curry } from "src/curry/entities/curry.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";


/*
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

    @OneToOne(() => Curry, { cascade: true })
    @JoinColumn()
    curry: Curry;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
