import { Response, NextFunction, Request } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This is class based middleware implemented for book  module');
    next();
  }
}
