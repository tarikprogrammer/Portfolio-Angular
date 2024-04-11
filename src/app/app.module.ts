import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbareComponent } from './header/navbare/navbare.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbareComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
