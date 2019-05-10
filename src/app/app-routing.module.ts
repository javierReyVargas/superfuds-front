import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/product/list/list.component';
import {CreateComponent} from './components/product/create/create.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {BillComponent} from './components/bill/bill.component';
import {ReportComponent} from './components/report/report.component';
import {LoginComponent} from './components/auth/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuardServiceGuard} from './guards/auth-guard-service.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuardServiceGuard ],
    children: [
      {path: '', component: ListComponent},
      {path: 'load-products', component: CreateComponent},
      {path: 'buy-products', component: ListComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'bills', component: BillComponent},
      {path: 'reports', component: ReportComponent},
      {path: '**', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
