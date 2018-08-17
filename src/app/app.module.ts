import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColombiaHeaderComponent } from './colombia-header/colombia-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ColombiaHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
