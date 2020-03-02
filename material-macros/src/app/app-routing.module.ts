import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { TrackComponent } from './components/track/track.component';
import { UserItemsDialogEntryComponent } from './components/track/user-items-dialog/user-items-dialog.component';
import { CreateUserItemComponent } from './components/track/user-items-dialog/create-user-item/create-user-item.component';
import { EditUserItemsComponent } from './components/track/user-items-dialog/edit-user-items/edit-user-items.component';
import { AddLogItemDialogEntryComponent } from './components/track/add-log-item-dialog/add-log-item-dialog.component';

//TODO Add redirect to current date if the route is blank.
const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    ...canActivate(redirectLoggedInTo(['']))
  },
  { 
    path: ':date',
    component: TrackComponent,
    ...canActivate(redirectUnauthorizedTo(['login'])),
    children: [
      {
        path: 'add',
        component: AddLogItemDialogEntryComponent
      },
      {
        path: 'items',
        component: UserItemsDialogEntryComponent,
      }
    ]
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
  },
  {
    path: 'create',
    component: CreateUserItemComponent,
    outlet: 'items',
  }, 
  {
    path: '',
    component: EditUserItemsComponent,
    outlet: 'items',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
