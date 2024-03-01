import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
  addBook():string {
    return 'This Will add Book';
  }

  updateBook():string {
    return 'This Will update Book';
  }

  deleteBook():string {
    return 'This Will delete Book';
  }

  findBook():string {
    return 'This Will find all Book';
  }

}