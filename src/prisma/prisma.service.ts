import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {

    constructor(){
        const adapter = new PrismaPg({
            url: process.env.DATABASE_URL
        });
        super({adapter});

    }
    
}
