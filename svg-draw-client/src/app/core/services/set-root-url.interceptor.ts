/**
 * Http call interceptor to set root URL
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetRootUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = 'https://localhost:';
    req = req.clone({
      url: url + req.url,
    });
    return next.handle(req);
  }
}
