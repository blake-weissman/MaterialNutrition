import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './components/track/track.component';
import { CreateUserItemEntryComponent } from './components/track/create-user-item/create-user-item.component';
import { EditUserItemsEntryComponent } from './components/track/edit-user-items/edit-user-items.component';
import { AddLogItemDialogEntryComponent } from './components/track/add-log-item-dialog/add-log-item-dialog.component';
import { GoalsDialogEntryComponent } from './components/track/goals-dialog/goals-dialog.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
		path: 'login',
    component: LoginComponent,
    // ...canActivate(redirectLoggedInTo(['']))
  },
	{
    path: ':date',
    component: TrackComponent,
    children: [
      {
        path: 'add',
        component: AddLogItemDialogEntryComponent
      },
      {
        path: 'goals',
        component: GoalsDialogEntryComponent,
      },
      {
        path: 'create',
        component: CreateUserItemEntryComponent,
      },
      {
        path: 'edit',
        component: EditUserItemsEntryComponent,
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    component: TrackComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
