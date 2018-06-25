import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoLsComponent } from './home/info-ls/info-ls.component';
import { OrdersComponent } from './home/orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewOrdersComponent } from './home/new-orders/new-orders.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoLsComponent,
    OrdersComponent,
    AddOrderComponent,
    PageNotFoundComponent,
    NewOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
