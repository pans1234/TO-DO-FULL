import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoTaskModule } from './task/task.module';

@Module({
  imports: [TodoTaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
