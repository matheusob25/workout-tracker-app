import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TrainingPlanModule } from './training-plan/training-plan.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TrainingPlanModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
