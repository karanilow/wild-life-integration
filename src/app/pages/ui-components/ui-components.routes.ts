import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
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
