import { ApiProperty } from "@nestjs/swagger";
import { Famille } from "src/famille/entities/famille.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";
import { FraisPort } from "src/frais-port/entities/frais-port.entity";
import { Tva } from "src/tva/entities/tva.entity";
import { Curry } from "src/utils/curry.enum";

export class CreateProduitDto {
    
    @ApiProperty()
    reference: string;

    @ApiProperty()
    GenCode: string;

    @ApiProperty()
    CodeBarre: string;

    @ApiProperty()
    LibProd: string;

    @ApiProperty()
    Description: string;

    @ApiProperty()
    PrixHt: string;

    @ApiProperty()
    QteReappro: string;

    @ApiProperty()
    QteMini: string;

    @ApiProperty()
    photos: string;

    @ApiProperty()
    NumFournisseur: Fournisseur;

    @ApiProperty()
    TauxTva: Tva;

    @ApiProperty()
    codePort: FraisPort;

    @ApiProperty()
    codeFamille: Famille;

    @ApiProperty()
    Observation: string;

    @ApiProperty()
    SaisirPar: string;

    @ApiProperty()
    AuteurModif: string;

    @ApiProperty()
    curry: Curry;
}
