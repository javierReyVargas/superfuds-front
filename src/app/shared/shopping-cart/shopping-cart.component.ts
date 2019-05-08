import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {MatDialogRef} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';

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

  public getValueProductTotal( quantity: number, price: number): number {
    return quantity * price;
  }

  public getTotalBill() {
    let numTotalBill: number;
    numTotalBill = 0;

    for (let i = 0; i < this.arrProducts.length; i++ ) {
      numTotalBill += this.arrProducts[i].quantityBuy * +this.arrProducts[i].price;
    }

    this.totalBill = numTotalBill;
  }

}
