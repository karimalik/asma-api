import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
* create the entity ModeLivraison
* @id
* @libModeLivraison
*/
@Entity()
export class ModeLivraison {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true})
    libModeLivraison: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
