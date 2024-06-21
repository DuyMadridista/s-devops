import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express'; // Import the Request and Response types from 'express'

async function bootstrap() {
  const PORT = 3001;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.getHttpAdapter().get('/api/simple-endpoint', (req: Request, res: Response) => {
    return res.send('This is a simple endpoint!');
  });
  await app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
}

bootstrap();
