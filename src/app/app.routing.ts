import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColombiaWelcomeComponent } from './colombia-welcome/colombia-welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ColombiaWelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
