import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
  constructor() {
    super('This is my Custom Bokk Exception',HttpStatus.BAD_REQUEST)
  }
}