import { Component, OnInit } from '@angular/core';
import {Bill} from '../../models/Bill';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

import * as fromBillsActions from '../../store/actions';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.sass']
})
export class BillComponent implements OnInit {

  public arrBills: Bill[] = [];

  constructor( public store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('Bills').subscribe(
      response => {
        this.arrBills = response.bills;
      }
    );

    this.store.dispatch(new fromBillsActions.LoadBills());
  }

  public deleteBill(bill: Bill) {
    this.store.dispatch(new fromBillsActions.DeleteBill(bill));
  }

}
