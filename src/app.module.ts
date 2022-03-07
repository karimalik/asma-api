import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { SocieteModule } from './societe/societe.module';
import { Societe } from './societe/entities/societe.entity';

const entities = [
  Client,
  User,
  Role,
  Societe,
]
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    /*
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
    UsersModule,
    RolesModule,
    SocieteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
