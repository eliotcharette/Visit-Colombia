import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ColombiaHeaderComponent } from './colombia-header/colombia-header.component';
import { ColombiaNavComponent } from './colombia-nav/colombia-nav.component';
import { ColombiaFooterComponent } from './colombia-footer/colombia-footer.component';
import { ColombiaCarouselComponent } from './colombia-carousel/colombia-carousel.component';
import { ColombiaWelcomeComponent } from './colombia-welcome/colombia-welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewExperienceComponent } from './new-experience/new-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    ColombiaHeaderComponent,
    ColombiaNavComponent,
    ColombiaFooterComponent,
    ColombiaCarouselComponent,
    ColombiaWelcomeComponent,
    NewExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
