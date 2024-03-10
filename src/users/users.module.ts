import { UserController } from '../users/user.controller'

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { userSchema,User } from 'src/schems/User.schema';
import { UsersService } from './user.servies';

@Module({
  imports :[
    MongooseModule.forFeature([
      {
        name:User.name,
        schema:userSchema,
      }
    ])
  ],
  providers:[UsersService],
  controllers:[UserController]
})
export class userModule{}

