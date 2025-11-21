import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { url } from 'node:inspector';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:123@localhost:5433/workoutTracker?schema=public'
                },
            },
        });
    }
    
}
