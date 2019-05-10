import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CreateComponent } from './components/product/create/create.component';
import { ListComponent } from './components/product/list/list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/product/card/card.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {arrEffects} from './store/effects';
import {HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import {FormsModule} from '@angular/forms';
import { ShoppingCartComponent } from './shared/shopping-cart/shopping-cart.component';
import { BillComponent } from './components/bill/bill.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    CreateComponent,
    ListComponent,
    InventoryComponent,
    MenuComponent,
    CardComponent,
    LoadingComponent,
    ShoppingCartComponent,
    BillComponent,
    ReportComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot( arrEffects ),
    HttpClientModule,
    MatExpansionModule,
    MatIconModule
  ],
  entryComponents: [
    ShoppingCartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
