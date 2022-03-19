import { ApiProperty } from "@nestjs/swagger";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Curry } from "src/utils/curry.enum";

export class CreateEntreeStockDto {
    
    @ApiProperty()
    dateAppro: string;
  
    @ApiProperty()
    NumFournisseur: Fournisseur;
  
    @ApiProperty()
    Reference: Produit;

    @ApiProperty()
    quantite: string;

    @ApiProperty()
    prixAchat: string;
  
    @ApiProperty()
    saisirPar: string;
  
    @ApiProperty()
    AuteurModif: string;

    @ApiProperty()
    curry: Curry;
}
