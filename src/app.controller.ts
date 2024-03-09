import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('/product')
export class ProductController {
  @Post('/addProduct')
  addProduct(@Req() req: Request, @Res() res: Response): any {
    return res.json(req.body);
  }
}
