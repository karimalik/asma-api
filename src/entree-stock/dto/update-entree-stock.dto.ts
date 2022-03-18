import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEntreeStockDto } from './create-entree-stock.dto';

export class UpdateEntreeStockDto extends PartialType(CreateEntreeStockDto) {
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
