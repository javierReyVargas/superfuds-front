import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Product} from '../../../models/Product';
import {AppState} from '../../../store/app.reducer';
import * as productsActions from '../../../store/actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  public arrProducts: Product[] = [];
  public loading: boolean;

  public dataProductSelected: Product = new Product();
  public dataProduct: Product = new Product();

  constructor( public store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new productsActions.LoadProducts());

    this.store.select('Products').subscribe(
      response => {
        this.arrProducts = response.products;
        this.loading = response.loading;
      }
    );
  }

  public setDataProduct(): void{
    this.dataProduct = {
      ... this.dataProductSelected
    };
  }

  public saveData(): void {
    this.store.dispatch(new productsActions.CreateProduct(this.dataProduct));
    this.dataProduct = new Product();
  }

}
