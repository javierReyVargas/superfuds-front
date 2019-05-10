import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from '../services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {

  constructor( private authService: UsersService) {}

  canActivate() {
    return this.authService.isLoged();
  }
}
