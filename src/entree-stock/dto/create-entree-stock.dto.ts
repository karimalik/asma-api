import { ApiProperty } from "@nestjs/swagger";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { Produit } from "src/produit/entities/produit.entity";

export class CreateEntreeStockDto {
    
    @ApiProperty()
    dateAppro: Date;
  
    @ApiProperty()
    NumFournisseur: Fournisseur;
  
    @ApiProperty()
    Reference: Produit;

    @ApiProperty()
    quantite: number;

    @ApiProperty()
    prixAchat: string;
  
    @ApiProperty()
    saisirPar: string;
  
    @ApiProperty()
    AuteurModif: string;
}
