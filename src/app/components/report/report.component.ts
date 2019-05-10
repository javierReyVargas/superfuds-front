import { Component, OnInit } from '@angular/core';
import * as fromUserActions from '../../store/actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {Client} from '../../models/Client';
import {Provider} from '../../models/Provider';
import {Product} from '../../models/Product';
import {Report} from '../../models/Report';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {

  public strTypeReport: string;
  public modelId: number;
  public arrClients: Client[] = [];

  public arrProviders: Provider[] = [];
  public arrProducts: Product[] = [];

  public arrDataReport: Report[] = [];
  public total: number;


  typeReport: Array<any> = [
    {value: 'client', viewValue: 'Cliente'},
    {value: 'provider', viewValue: 'Proveedor'},
    {value: 'products', viewValue: 'Producto'}
  ];
  constructor( private store: Store<AppState> ) {}

  ngOnInit() {
    this.store.select('Users')
      .subscribe(
        users => {
          this.arrClients = users.clients;
          this.arrProviders = users.provider;
        }
      );

    this.store.select('Products')
      .subscribe(
        objProducts => {
          this.arrProducts = objProducts.productsHasTransactions;
        }
      );

    this.store.select('Report')
      .subscribe(
        dataReport => {
          this.arrDataReport = dataReport.report;
          this.total = dataReport.total;
        }
      );

    this.getClients();
    this.getProviders();
    this.getProductsHasTransactions();

  }
  private getClients(): void {
    this.store.dispatch( new fromUserActions.LoadClients() );
  }
  private getProviders(): void {
    this.store.dispatch( new fromUserActions.LoadProvider() );
  }
  private getProductsHasTransactions(): void {
    this.store.dispatch(new fromUserActions.LoadProductsHasTransactions() );
  }

  public showButtonGenerate(): boolean {
    return this.modelId !== undefined && this.modelId !== null && this.modelId !== 0;
  }

  public generateReport() {
    this.store.dispatch(new fromUserActions.LoadReport( this.strTypeReport, this.modelId));
  }
}
