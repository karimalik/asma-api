import { EntreeStock } from "src/entree-stock/entities/entree-stock.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/** 
* create the entity fournisseur
* @societe
* @civilite
* @nom
* @prenom
* @adresse
* @codePostal
* @ville
* @pays
* @telephone
* @fax
* @email
* @observation
*/
@Entity()
export class Fournisseur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        { type: 'varchar', 
        nullable: true, 
         unique: true 
    })
    numFournisseur: string;

    @Column({ 
        type: 'varchar', 
        nullable: true
    })
    Societe: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    civilite: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    nom: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    prenom: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    adresse: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    codePostal: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    ville: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    pays: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    telephone: string;

    @Column({ 
        type: 'varchar',
        nullable: true 
    })
    fax: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    email: string;

    @Column({ 
        type: 'varchar', 
        nullable: true 
    })
    observation: string;

    @OneToMany(
        () => Produit, 
        produit => produit.NumFournisseur
    )
    produit: Produit[];

    @OneToMany(
        () => EntreeStock,
        entreeStock => entreeStock.NumFournisseur,
    )
    EntreStock: EntreeStock[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
