import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { BookService } from './book.service';
import { BookController } from './app.controller';
@Module({
  imports: [UserModule,OrderModule,ChatModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})

export class RootModule {
  constructor(){
    console.log("RootModule")
  }
}

