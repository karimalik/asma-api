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

    @Column({ unique: true })
    @IsNotEmpty()
    TauxTva: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}
