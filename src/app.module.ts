import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule, 
    TrainingPlanModule, 
    AuthModule, 
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
