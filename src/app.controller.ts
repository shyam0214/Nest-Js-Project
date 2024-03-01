import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  @Get("/findBook")
  getBook():string{
    return this.bookService.findBook()
  }
}


// https://shyam0214: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@github.com/shyam0214/NestJs.git