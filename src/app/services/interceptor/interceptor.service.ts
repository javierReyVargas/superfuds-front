import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers: any;
    if ( !req.url.includes('/oauth/token') ) {
      headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    const reqClone = req.clone({headers});

    return next.handle(reqClone);
  }
}
