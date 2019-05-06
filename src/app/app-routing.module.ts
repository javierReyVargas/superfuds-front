import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {InventoryComponent} from './inventory/inventory.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'load-products', component: CreateComponent},
  {path: 'buy-products', component: ListComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'reports', component: InventoryComponent},
  {path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
