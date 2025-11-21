import { Injectable, Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){

    }
    signin(){

    }

    signup(dto: AuthDto){
        return "I have signed up"
    }

}