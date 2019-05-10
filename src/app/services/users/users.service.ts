import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../models/User';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string;
  constructor( private http: HttpClient,
               private router: Router) {
    this.url = environment.API_URL;
  }

  public getClients(): Observable<any> {
    return this.http.get(`${this.url}clients`)
      .pipe(
        map(
          response => response['data']
        )
      );
  }

  public getProviders(): Observable<any> {
    return this.http.get(`${this.url}provider`)
      .pipe(
        map(
          response => response['data']
        )
      );
  }

  public login(user: User): Observable<any> {
    const data = {
      grant_type: 'password',
      client_id: environment.CLIENT_ID,
      client_secret: environment.CLIENT_SECRET,
      username: user.email,
      password: user.password

    };
    return this.http.post(`${this.url}oauth/token`, data)
      .pipe(
        map(
          (response: User) => {
            this.loginSuccess( response );
            this.router.navigate(['']);
            return response;
          }
        )
      );
  }

  public loginSuccess(userData: User): Observable<any> {
    return of(localStorage.setItem('token', userData.access_token));
  }

  public isLoged(): boolean {

    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    } else {
      return true;
    }

  }
}
