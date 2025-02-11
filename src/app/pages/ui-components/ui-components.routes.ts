import { Routes } from '@angular/router';

// ui
import { AppFormsComponent } from './forms/forms.component';
import { AppSpecieComponent } from './specie/specie.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'specie/:id',
        component: AppSpecieComponent,
      }
    ],
  },
];
