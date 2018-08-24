import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColombiaWelcomeComponent } from './colombia-welcome/colombia-welcome.component';
import { ExperienceComponent } from './experience/experience.component';
import { ColombiaNavComponent } from './colombia-nav/colombia-nav.component';
import { NewExperienceComponent } from './new-experience/new-experience.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ColombiaWelcomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'new-experience',
    component: NewExperienceComponent
  },
  {
    path: 'admin',
    component: ExperienceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
