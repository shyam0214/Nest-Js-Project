import { Module } from '@nestjs/common';
import { book } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [book, UserModule],
  controllers: [],
  providers: [],
  exports:[]
})

export class RootModule {
  constructor(){
    console.log("RootModule")
  }
}

