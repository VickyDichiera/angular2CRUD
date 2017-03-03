import { Routes } from '@angular/router';
import { ContactBookComponent } from './contactBook/contact-book.component';

export const appRoutes : Routes = [
  {
    path: 'contact-book',
    component: ContactBookComponent,
    useAsDefault: true
  },
  {
    path: '',
    redirectTo: '/contact-book',
    pathMatch: 'full'
  },
  /*{
    path: 'favorites',
    component: CrisisListComponent
  },
  {
    path: 'contact/:id',
    component: HeroDetailComponent
  },*/
];
