import { Routes } from '@angular/router';

import { HomeComponent } from 'app/components';
import { SceneComponent } from 'app/components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'scene/:id',
    component: SceneComponent
  }
];
