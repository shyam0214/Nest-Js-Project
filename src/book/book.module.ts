import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookMiddleware } from './book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})


export class book implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('book');
  }

  constructor() {
    console.log('Book module');
  }

}
