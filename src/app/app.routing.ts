import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BikesComponent } from './bikes/bikes.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
];

export const Routing = RouterModule.forRoot(routes);
