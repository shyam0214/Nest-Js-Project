import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './user.servies';
import { Request, Response } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import mongoose from 'mongoose';

@Controller('/users')
export class UserController {
  constructor(private UsersService: UsersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(
    @Body() CreateUserDto: CreateUserDto,
    // @Req() req: Request,
    // @Res() res: Response,
  ) {
    console.log(CreateUserDto);
    return this.UsersService.createUser(CreateUserDto);
    // return res.status(200).send({status :true,data})
  }

  @Get()
  findAllUser() {
    return this.UsersService.getUsers();
  }
  @Get('/:id')
  async findUserById(@Param('id') id: string) {
    try {
      const isValid = mongoose.Types.ObjectId.isValid(id);
     console.log(isValid)
      if (isValid == false) throw new HttpException('Object id not Valid', 404);
      const findUser = await this.UsersService.getUserById(id);
      
      if (!findUser) throw new HttpException('User Not Found', 404);
      return findUser;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
