import { Request } from 'express';
import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { request } from 'express';

@Injectable()
export class BookGuard implements CanActivate{

  public key : string = 'hiishyam';

  canActivate(context: ExecutionContext): boolean {

    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if(request.headers['name'] === undefined) return false;

    return request.headers['name'] === this.key;
  }
}
