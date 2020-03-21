import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { TrackComponent } from './components/track/track.component';
import { UserItemsDialogEntryComponent } from './components/track/user-items-dialog/user-items-dialog.component';
import { CreateUserItemComponent } from './components/track/user-items-dialog/create-user-item/create-user-item.component';
import { EditUserItemsComponent } from './components/track/user-items-dialog/edit-user-items/edit-user-items.component';
import { AddLogItemDialogEntryComponent } from './components/track/add-log-item-dialog/add-log-item-dialog.component';
import { GoalsDialogEntryComponent } from './components/track/goals-dialog/goals-dialog.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

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
      },
      {
        path: 'goals',
        component: GoalsDialogEntryComponent,
      }
    ]
  },
  { 
    path: '',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { 
      authGuardPipe: redirectUnauthorizedToLogin 
    },
    component: TrackComponent,
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
