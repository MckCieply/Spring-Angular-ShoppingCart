import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { GetProductsComponent } from './components/get-products/get-products.component';
import {AlertConfirmComponent} from "./alerts/confirm/alert-confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    GetProductsComponent,
    AlertConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
