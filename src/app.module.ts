import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { SocieteModule } from './societe/societe.module';
import { Societe } from './societe/entities/societe.entity';
import { ActionPossibleModule } from './action-possible/action-possible.module';
import { ActionPossible } from './action-possible/entities/action-possible.entity';
import { TvaModule } from './tva/tva.module';
import { Tva } from './tva/entities/tva.entity';
import { FraisPortModule } from './frais-port/frais-port.module';
import { FraisPort } from './frais-port/entities/frais-port.entity';
import { FamilleModule } from './famille/famille.module';
import { CurryModule } from './curry/curry.module';
import { Curry } from './curry/entities/curry.entity';
import { Famille } from './famille/entities/famille.entity';
import { ModeLivraisonModule } from './mode-livraison/mode-livraison.module';
import { ModeLivraison } from './mode-livraison/entities/mode-livraison.entity';
import { ModeReglementModule } from './mode-reglement/mode-reglement.module';
import { ModeReglement } from './mode-reglement/entities/mode-reglement.entity';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { Fournisseur } from './fournisseur/entities/fournisseur.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AdresseLivraisonModule } from './adresse-livraison/adresse-livraison.module';
import { AdresseLivraison } from './adresse-livraison/entities/adresse-livraison.entity';
import { AdresseFacturationModule } from './adresse-facturation/adresse-facturation.module';
import { AdresseFacturation } from './adresse-facturation/entities/adresse-facturation.entity';
import { ProduitModule } from './produit/produit.module';
import { Produit } from './produit/entities/produit.entity';
import { EntreeStockModule } from './entree-stock/entree-stock.module';
import { EntreeStock } from './entree-stock/entities/entree-stock.entity';


const entities = [
  Client,
  Role,
  Societe,
  ActionPossible,
  Tva,
  FraisPort,
  Curry,
  Famille,
  ModeLivraison,
  ModeReglement,
  Fournisseur,
  User,
  AdresseLivraison,
  AdresseFacturation,
  Produit,
  EntreeStock,

]
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    /** 
    * configuration & connection to the database
    * @type: mysql
    * @host: localhost
    * @port: 3306
    * @username: root
    * @password: no password
    * @database: asma
    */
    TypeOrmModule.forRoot({
      "type": process.env.DB_TYPE as any,
      "host": process.env.DB_HOST,
      "port": parseInt(process.env.DB_PORT),
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "synchronize": true,
      "logging": true,
      "entities": entities,
    }),
    ClientsModule,
    RolesModule,
    SocieteModule,
    ActionPossibleModule,
    TvaModule,
    FraisPortModule,
    FamilleModule,
    CurryModule,
    ModeLivraisonModule,
    ModeReglementModule,
    FournisseurModule,
    UsersModule,
    AdresseLivraisonModule,
    AdresseFacturationModule,
    ProduitModule,
    EntreeStockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
