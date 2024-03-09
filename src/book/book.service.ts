import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4} from "uuid"


@Injectable()
export class BookService {
  
  public books: Book[] = [];

  // add book
  addBookService(book: Book): string {
    book.id=uuidv4()
    this.books.push(book);
    return 'Book Has Been Successfully ';
  }

  // update book
  updateBookService(book: Book):string {
    let index = this.books.findIndex( (c) => {
      return c.id != book.id;
    });
    this.books[index] = book
    return "Book has Been successfully Update"

  }

  // delete Book

   deleteBookService(bookId :string) :string {
    this.books=this.books.filter((c)=>{
     return  c.id != bookId
    })
     return 'Book has been delete'
   }

   // find all Books

   findAllBooks():Book []{
    return this.books;
   }

}
