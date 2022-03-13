import { Roles } from "src/utils/role.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        type: 'varchar', 
        nullable: true, 
        unique: true
    })
    nom: string;

    @Column({ 
        type: 'varchar', 
        nullable: true, 
        unique: true
    })
    email: string;

    @Column({ 
        type: 'varchar', 
        nullable: true,
    })
    password: string;

    @Column({ 
        nullable: true,
    })
    salt: string;

    @Column({ 
        type: 'enum', 
        enum: Roles,
        default: Roles.USER,
        nullable: true,

    })
    role: Roles;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
