import { IsNotEmpty, IsNumber } from "class-validator";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

/*
* create the entity clients
* @TauxTva
*/
@Entity()
export class Tva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, unique: true })
    @IsNotEmpty()
    TauxTva: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
    
}
