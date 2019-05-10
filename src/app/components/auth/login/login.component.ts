import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducer';
import * as fromAuth from '../../../store/actions';
import {User} from '../../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
               private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(data: User) {
    this.store.dispatch( new fromAuth.LoginClients(data));
  }

}
