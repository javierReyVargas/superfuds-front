import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string;
  constructor( private http: HttpClient) {
    this.url = environment.API_URL;
  }

  getClients(): Observable<any> {
    return this.http.get(`${this.url}clients`)
      .pipe(
        map(
          response => response['data']
        )
      );
  }

  getProviders(): Observable<any> {
    return this.http.get(`${this.url}provider`)
      .pipe(
        map(
          response => response['data']
        )
      );
  }
}
