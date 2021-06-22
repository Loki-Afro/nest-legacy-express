import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { DownTheRabbitHoleService } from './app.fancy.amqp';
// import { MessagingController } from './messaging/messaging.controller';
// import { MessagingService } from './messaging/messaging.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'test-exchange',
          type: 'direct',
        },
      ],

      uri: 'amqp://guest:guest@localhost:5672',
    }),
    DamnStupidRabbitModule,
  ],
  // providers: [MessagingService],
  providers: [DownTheRabbitHoleService],
})
export class DamnStupidRabbitModule {}
