import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { MainComponent } from './components/main/main.component';

//TODO Add redirect to current date if the route is blank.
const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    ...canActivate(redirectLoggedInTo(['']))
  },
  { 
    path: ':date',
    component: MainComponent,
    ...canActivate(redirectUnauthorizedTo(['login']))
  },
  { 
    path: '',
    redirectTo: `${(new Date(new Date().setHours(0,0,0,0))).getTime()}`,
    pathMatch: 'full',
    ...canActivate(redirectUnauthorizedTo(['login']))
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
