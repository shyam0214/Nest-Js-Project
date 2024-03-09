import { BookService } from './book.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,ParseIntPipe,
  BadRequestException,
  UseFilters,
  UseGuards
} from '@nestjs/common';
import { Book } from './data/book.dto';
import { error } from 'console';
import { BookException } from './book.exception';
import { BookCustomerExceptionFilter } from './book.exception.fillter';
import { BookGuard } from './book.guard';

@Controller('/book')
@UseFilters(BookCustomerExceptionFilter)
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  @UseGuards(new BookGuard())
  
  getAllBooks(): Book[] {
    // throw new BadRequestException({status :400 , error:"this is bad request"})
    throw new BookException()
    return this.bookService.findAllBooks();
  }

  @Put('/update')
  @UseGuards(new BookGuard())
  updateBook(@Body() book: Book) {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string) {
    throw new BadRequestException()
    return this.bookService.deleteBookService(bookId);
  }

  @Post('/add')
  addBook(@Body() book: Book) {
    return this.bookService.addBookService(book);
  }

}
