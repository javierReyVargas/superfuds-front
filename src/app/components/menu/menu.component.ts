import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {User} from '../../models/User';
import {UsersService} from '../../services/users/users.service';

import * as fromUserActions from '../../store/actions';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public user: User = null;
  constructor( private router: Router,
               private userService: UsersService,
               private store: Store<AppState>) { }

  ngOnInit() {

    if (this.user === null ) {
      if (this.userService.isLoged()) {
        this.store.dispatch( new fromUserActions.LoginClientsSuccess( this.user ));
      }
    }

    this.store.select('Users').
    subscribe(
      responseUser => {
        this.user = responseUser.user;
      }
    );
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
