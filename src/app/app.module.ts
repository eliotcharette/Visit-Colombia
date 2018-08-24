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
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ExperienceComponent } from './experience/experience.component';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ColombiaHeaderComponent,
    ColombiaNavComponent,
    ColombiaFooterComponent,
    ColombiaCarouselComponent,
    ColombiaWelcomeComponent,
    NewExperienceComponent,
    ExperienceComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
