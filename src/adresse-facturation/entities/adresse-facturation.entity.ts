import { IsEmail } from "class-validator";
import { Client } from "src/clients/entities/client.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * create the entity AdresseFacturation
 * @id
 * @client_id
 * @contact
 * @adresse
 * @codePostal
 * @ville
 * @telephone
 * @pays
 * @email
 */
@Entity()
export class AdresseFacturation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true})
    contact: string;

    @Column({ type: 'varchar', nullable: true})
    adresse: string;

    @Column({ type: 'varchar', nullable: true})
    codePostal: string;

    @Column({ type: 'varchar', nullable: true})
    ville: string;

    @Column({ type: 'varchar', nullable: true})
    pays: string;

    @Column({ type: 'varchar', nullable: true})
    telephone: string;

    @Column({ type: 'varchar', nullable: true})
    @IsEmail()
    email: string;

    @ManyToOne(() => Client, client => client.adrFacturation,  {onDelete: 'SET NULL'})
    client: Client;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
