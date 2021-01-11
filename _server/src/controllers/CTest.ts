// • @Get(path)
// • @Post(path)
// • @Patch(path)
// • @Put(path)
// • @Delete(path)
import { Controller, Get } from 'koa-ts-controllers';

@Controller('/test')
class TestController {
  @Get('/hello')
  // http://localhost:8083/api/v1/test/hello
  async sayWorld() {
    return 'Hello Test!';
  }

}
