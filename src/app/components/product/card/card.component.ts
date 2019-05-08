import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Product} from '../../../models/Product';
import {AppState} from '../../../store/app.reducer';
import {Store} from '@ngrx/store';

import * as shoppingCartActions from '../../../store/actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() public dataProduct: Product = new Product();
  public url: string;

  constructor( public store: Store<AppState>) {
    this.url = environment.API_URL;
  }

  ngOnInit() {
  }

  public addProductToCart(): void {
    this.store.dispatch( new shoppingCartActions.LoadProductToCart(this.dataProduct));
  }

}
