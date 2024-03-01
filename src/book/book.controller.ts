import { BookService } from './book.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './data/book.dto';

@Controller('/book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Put('/update')
  updateBook(@Body() book: Book) {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string) {
    return this.bookService.deleteBookService(bookId);
  }
   @Post("/add")
   addBook(@Body() book:Book){
    return this.bookService.addBookService(book)
   }

}
