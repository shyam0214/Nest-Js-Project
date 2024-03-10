import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://shyamgupta:.T!8NRrzf6FyMYc@cluster0.dbdyccj.mongodb.net/shyamNest'),userModule],
  controllers: [],
  providers: [],
  exports:[]
})

export class RootModule {
  constructor(){
    console.log("RootModule")
  }
}

