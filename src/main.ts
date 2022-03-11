import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  /**
   * 监听端口
   * @description 可访问地址：http://localhost:3000/
   */
  await app.listen(3000);
}

bootstrap();
