import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducer';

import * as productsActions from '../../../store/actions';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public arrProducts: Product[] = [];
  public loading: boolean;
  public url: string;

  constructor( public store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('Products').subscribe(
      (response) => {
        this.arrProducts = response.products;
        this.loading = response.loading;
      }
    );
    this.store.dispatch( new productsActions.LoadProducts());
  }

}
