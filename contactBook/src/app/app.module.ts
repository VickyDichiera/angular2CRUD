import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactBookComponent } from './contactBook/contact-book.component';
import { ContactBookService } from './contactBook/contact-book.service'

const appRoutes : Routes = [
  {
    path: 'contact-book',
    component: ContactBookComponent,
  },
  {
    path: '',
    redirectTo: '/contact-book',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(
      appRoutes
    ),

  ],
  providers: [
    ContactBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
