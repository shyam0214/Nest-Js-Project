import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';

import { CartsModule } from './carts/carts.module';
@Module({
  imports: [Feature3, CartsModule],
  controllers: [],
  providers: [],
  exports:[]
})

export class ChatModule {
  constructor(){
    console.log("ChatModules")
  }
}
