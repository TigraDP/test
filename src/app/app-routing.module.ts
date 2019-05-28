import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'about', component: ContactsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
