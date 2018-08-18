import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColombiaHeaderComponent } from './colombia-header/colombia-header.component';
import { ColombiaNavComponent } from './colombia-nav/colombia-nav.component';
import { ColombiaFooterComponent } from './colombia-footer/colombia-footer.component';
import { ColombiaCarouselComponent } from './colombia-carousel/colombia-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    ColombiaHeaderComponent,
    ColombiaNavComponent,
    ColombiaFooterComponent,
    ColombiaCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
