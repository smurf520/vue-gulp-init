import { bootstrapControllers } from 'koa-ts-controllers';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import configs from './configs';

const app = new Koa();
const router = new KoaRouter();

(async () => {
  await bootstrapControllers(app, {
    router,
    basePath: '/api',
    versions: [1],
    controllers: [
      __dirname + '/controllers/**/*',
    ],
  });
  app.use(router.routes());
  app.listen(configs.server.port, configs.server.host, () => {
    console.log(`访问启动成功： http://${configs.server.host}:${configs.server.port}`);
  });
})();