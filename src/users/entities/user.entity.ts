import { 
    BeforeInsert,
    Column, 
    CreateDateColumn,
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

import * as bcrypt from 'bcrypt';
import { IsEmail, IsNotEmpty } from "class-validator";
/*
* create the entity user
* @id: primaryGeneratedColumn
* @email: string, NotNull
* @password: string, min: 8
*/
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({ type: 'varchar', nullable: true })
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    //hash password after insert
    @BeforeInsert()
    async hasPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }

    //compare & validate the password
    async validatePassword(password: string): Promise<boolean> {

        return bcrypt.compare(password, this.password);
    }
}
