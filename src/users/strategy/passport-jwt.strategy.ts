import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from '../interface/payload.interface';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as dotenv from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';

dotenv.config()
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      // private configService: ConfigService,
      @InjectRepository(User)
      private userRepository: Repository<User>,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: PayloadInterface) {
    
    //get user
    const user = await this.userRepository.findOne({ email: payload.email });

    //if user exist
    if (user) {
      delete user.salt;
      delete user.password;
      return user;
      // const {password, salt, ...result} = user;
      // return result;
    } else {
        throw new UnauthorizedException();
    }

  }
}