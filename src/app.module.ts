import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
// 引入 Mongoose 模块
import { MongooseModule } from '@nestjs/mongoose';

// 连接数据库
const DBRootModule = MongooseModule.forRoot('mongodb://localhost/xxx');

@Module({
  imports: [DBRootModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
