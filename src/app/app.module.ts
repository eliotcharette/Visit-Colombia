import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColombiaHeaderComponent } from './colombia-header/colombia-header.component';
import { ColombiaNavComponent } from './colombia-nav/colombia-nav.component';
import { ColombiaFooterComponent } from './colombia-footer/colombia-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ColombiaHeaderComponent,
    ColombiaNavComponent,
    ColombiaFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
