import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User } from 'src/schems/User.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(CreateUserDto: CreateUserDto) {
    const newUser = new this.userModel(CreateUserDto)
    return newUser.save()
  }
   
  getUsers(){
    return this.userModel.find()
  }

  getUserById(id:string){
    return this.userModel.findById(id)
  }


}
