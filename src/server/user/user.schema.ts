// 定义用户数据表的格式

import { Schema } from 'mongoose';

export const userSchema = new Schema({
  // 覆盖 Mongoose 生成的默认 _id
  _id: { type: String, required: true },
  user_name: { type: String, required: true },
  password: { type: String, required: true },
});
