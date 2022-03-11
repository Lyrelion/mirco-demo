import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
/**
 * 引入 Mongoose 服务
 * @dependence npm install mongoose @nestjs/mongoose --save
 * @start 启动 mongodb 服务：在安装目录 bin 下打开命令行，执行 mongod -dbpath D:\Program Box\MongoDB\data\db
 */
import { MongooseModule } from '@nestjs/mongoose';
/**
 * 引入 静态资源 服务
 * @dependence yarn add @nestjs/serve-static
 * @dependence yarn add path
 * @example https://github.com/nestjs/nest/tree/master/sample/24-serve-static
 */
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// 连接数据库
const DBRootModule = MongooseModule.forRoot('mongodb://localhost/xxx');

// 设置静态服务地址
// 最终访问路径：http://localhost:3000/public / http://localhost:3000/public/index.html
const setStaticResourceUrl = ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'public'),
  exclude: ['/api*'], // 可以注释，不影响最终效果
});

@Module({
  imports: [DBRootModule, setStaticResourceUrl, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
