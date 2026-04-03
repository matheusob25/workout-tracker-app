import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor(){
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL as string,
        });
        super({adapter}); 

    }

<<<<<<< HEAD

    async onModuleDestroy(){
        await this.$disconnect();
    }

    async onModuleInit() {
        await this.$connect();
    }
=======
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
>>>>>>> 34595259f7f99cd1ce28a36b862e2cef779ba67f

}