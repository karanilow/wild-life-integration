import { Routes } from '@angular/router';
import { AppFormsComponent } from './ui-components/forms/forms.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppFormsComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Form', url: '/ui-components/forms' },
        { title: 'Starter' },
      ],
    },
  },
];
