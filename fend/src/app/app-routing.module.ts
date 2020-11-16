import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { CreateEventsComponent } from './create-events/create-events.component';


import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'navbar', component: NavbarComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'events', component: EventsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cevents', component: CreateEventsComponent, canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
