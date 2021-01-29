import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RetailComponent } from './retail/retail.component';
import { AutomotiveComponent } from './automotive/automotive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RetailComponent,
    AutomotiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
