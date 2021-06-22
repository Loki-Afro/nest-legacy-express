import * as express from 'express';

import { AppMiddleware } from './app.middleware';
import { NestAppHolder } from './app.nestappholder';
import { AppService } from './app.service';
import { DownTheRabbitHoleService } from './app.fancy.amqp';

const app = express();

app.use((req, res, next) => {
  const nest = new AppMiddleware(app).use(req, res, next);
  nest
    .then(() => {
      next();
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
      next();
    });
});

app.get('/legacy', async (req, res) => {
  const instance = NestAppHolder.getInstance();

  const helloFromAppService = instance.get(AppService).getHello();
  instance.get(DownTheRabbitHoleService).doSmth();

  res.send('Hello from Legacy!' + helloFromAppService);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
