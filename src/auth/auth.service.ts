 import { ConflictException, ForbiddenException, Injectable, Module, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, LoginDto } from "./dto";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
@Injectable()
export class AuthService{
<<<<<<< HEAD
    constructor(private prisma: PrismaService){
        
=======
    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService){

>>>>>>> af41e382ef5bed0d06b6ff51fb5dab5cd3d66101
    }

    async signin(dto: LoginDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email,
            }
        });
        if(!user) throw new ForbiddenException("Credenciais incorretas!");
        
        const pwMatches = await argon.verify(user.hash, dto.password);

        if(!pwMatches) throw new ForbiddenException("Credenciais incorretas!");
    
<<<<<<< HEAD
        const {hash, ...userNoHash} = user;
        return userNoHash;
=======

        return this.signToken(user.id, user.email);
>>>>>>> af41e382ef5bed0d06b6ff51fb5dab5cd3d66101
    }

    async signup(dto: AuthDto){
        const hash = await argon.hash(dto.password);
        try{
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    hash,
                },
                select: {
                    id:true,
                    email: true,
                    firstName: true,
                    lastName: true
                }
            });
            
            return this.signToken(user.id,user.email);
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Email já foi cadastrado.');
                }
            }
            throw error;
        }
    }

    async signToken(userId: number, email: string):Promise<{access_token: string}>{
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');


        const token = await this.jwt.signAsync(payload, {
           expiresIn: '15m',
           secret: secret,
        });
        return {
            access_token: token,

        };
    }

}