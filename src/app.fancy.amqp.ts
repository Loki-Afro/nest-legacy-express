import { Controller, Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class DownTheRabbitHoleService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public doSmth() {
    this.amqpConnection
      .publish('test-exchange', 'test-routingKey', { msg: 'hello world' })
      .then((r) => console.log('in queue now'));
  }
}
