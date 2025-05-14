import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Request Made ....", new Date().toDateString);
    next();
  }
}
