import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/*
* create the entity fraisPort
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

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
