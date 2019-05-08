import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {Product} from '../../models/Product';

import * as fromProductActions from '../../store/actions';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {

  public arrInventori: Product[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('Products').subscribe(
      response => {
        this.arrInventori = response.products;
      }
    );

    this.store.dispatch(new fromProductActions.LoadProducts());
  }

}
