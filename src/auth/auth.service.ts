 import { Injectable, Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

    }
    signin(){
        return '';
    }

    async signup(dto: AuthDto){
        const userExists = await this.prisma.user.findUnique({
            where: {email: dto.email},
        });
        const hash = await argon.hash(dto.password);
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
    }

}