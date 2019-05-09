import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {MatDialogRef} from '@angular/material';
import * as fromShoppingCartActions from '../../store/actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  public arrProducts: Product[] = [];
  public totalBill: number;

  constructor( public store: Store<AppState>,
               public dialogRef: MatDialogRef<ShoppingCartComponent>) {
    this.totalBill = 0;
  }

  ngOnInit() {
    this.store.select('ShoppingCart').subscribe(
      response => {
        this.arrProducts = response.products;
      }
    );
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getValueProductTotal( quantityBuy: number, price: number, quantity: number): number {
    this.getTotalBill();
    if (quantityBuy !== undefined) {
      if ( quantityBuy <= quantity) {
        return quantityBuy * price;
      } else {
        return quantity * price;
      }
    }
  }

  public getTotalBill() {
    let numTotalBill: number;
    numTotalBill = 0;

    for (let i = 0; i < this.arrProducts.length; i++ ) {
      if ( this.arrProducts[i].quantityBuy !== null &&
        this.arrProducts[i].quantityBuy !== undefined ) {
        if ( this.arrProducts[i].quantityBuy <= this.arrProducts[i].quantity ) {
          numTotalBill += this.arrProducts[i].quantityBuy * +this.arrProducts[i].price;
        } else {
          numTotalBill += this.arrProducts[i].quantity * +this.arrProducts[i].price;
        }
      }
    }
    this.totalBill = numTotalBill;
  }

  public deleteProductToCart(dataProduct: Product): void {
    this.store.dispatch( new fromShoppingCartActions.DeleteProductToCart(dataProduct));
  }

  public doBill(): void {
    this.store.dispatch( new fromShoppingCartActions.DoBill(this.arrProducts, this.totalBill));
  }

}
