import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CreateRideLayoutComponent } from './layouts/create-ride-layout/create-ride-layout.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';

const routes: Routes = [

  {path: '', component: MainLayoutComponent},

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      //{ path: '', component: LoginComponent }, // Login page
      //{ path: 'register', component: ProfileLayoutComponent }, // Register page
    ],
  },

  {path: 'create-ride', component: CreateRideLayoutComponent},
  {path: 'register', component: ProfileLayoutComponent},

  

  
  { path: '**', redirectTo: '' }, // Redirect unknown paths




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }