import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor (
    @InjectRepository(User) 
    private userRepository: Repository<User>,
    private jwtService: JwtService
    ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {

    
    const user = await this.userRepository.create({
      ...createUserDto
    });

    user.salt = await  bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    try {

      await this.userRepository.save(user);

    } catch (error) {

      throw new ConflictException('Email must be unique');

    }
    
    delete user.salt;

    return user;
  }

  async signIn(loginUserDto: LoginUserDto) {

    //récupération des credential
    const { email, password } = loginUserDto;

    const user = await this.userRepository.createQueryBuilder("user")
      .where("user.email = :email", {email})
      .getOne();
    
    if (!user) {
      throw new NotFoundException('Email or password does not correct');
    }

    const hashedPassword = await bcrypt.hash(password, user.salt);

    if (hashedPassword === user.password) {
  
      const payload = {
        email,
        role: user.role,
        nom: user.nom
      };
      
      const jwt = await this.jwtService.sign(payload);
      return {
        "acces_token": jwt
      };
    } else {

      throw new NotFoundException('Email or password does not correct');
    }
  }

  async findAll(): Promise<User[]>  {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {

    await this.userRepository.delete({ id });

    return { delted: true };
  }
}
