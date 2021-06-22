import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DamnStupidRabbitModule } from './rabbitmq.module';

@Module({
  imports: [DamnStupidRabbitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
