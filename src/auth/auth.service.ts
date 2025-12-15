 import { ConflictException, ForbiddenException, Injectable, Module, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, LoginDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

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
    
        const {hash, ...userNoHash} = user
        return userNoHash;
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
            
            return user;
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Email já foi cadastrado.');
                }
            }
            throw error;
        }
    }

}