import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({  type: 'varchar', nullable: true,  unique: true})
    nom: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
}
