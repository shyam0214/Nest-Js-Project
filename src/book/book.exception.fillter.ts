import { Response,Request } from 'express';
import {ArgumentsHost, ExceptionFilter, HttpException ,Catch} from "@nestjs/common";
import { timeStamp } from 'console';


@Catch(HttpException)
export class BookCustomerExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException, host: ArgumentsHost) :any{
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json( {
      statusCode :status,
      timeStamp:new Date().toISOString(),
      url:request.url,
      host:request.get("host")

    })
  }
  
}