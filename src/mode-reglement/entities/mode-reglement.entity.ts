import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


/** 
* create the entity fraisPort
* @id
* @libModeReglement
*/
@Entity()
export class ModeReglement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true})
    libModeReglement: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
