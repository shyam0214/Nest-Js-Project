import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction ,Request,Response} from 'express';

function globalMiddlewareOne(req:Request,res:Response, next:NextFunction){
  console.log("This is the global middleware number 1")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddlewareOne)
  await app.listen(3000);
}
bootstrap();