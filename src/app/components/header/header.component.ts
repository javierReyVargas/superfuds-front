import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {Product} from '../../models/Product';
import {MatDialog} from '@angular/material';
import {ShoppingCartComponent} from '../../shared/shopping-cart/shopping-cart.component';
import * as fromUi from '../../store/actions'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public numBadge: number;
  public dialogRef: any;
  constructor( public store: Store<AppState>,
               public dialog: MatDialog) { }

  ngOnInit() {
    this.store.select('ShoppingCart').subscribe(
      response => {
        this.numBadge = response.products.length;
      }
    );
  }

  public showShoppingCart(): void {
    this.dialogRef = this.dialog.open(ShoppingCartComponent, {
      width: '300px',
      height: '500px'
    });
  }

  public openOrClose(): void {
    this.store.dispatch( new fromUi.OpenOrCloseMenu());
  }

}
