import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParcelModule } from './parcel/parcel.module';

// lazy loading parcel module and add it to the routes

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


