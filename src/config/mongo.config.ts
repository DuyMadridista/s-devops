import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
  return {
    imports: [ConfigModule],
    useFactory: async () => ({
      uri: "mongodb+srv://nguyencongtrinhqb:sgroup123@cluster0.qom7v1f.mongodb.net/sgroup",
    }),
    inject: [ConfigService],
  };
};
