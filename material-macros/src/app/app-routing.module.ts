import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { TrackComponent } from './components/track/track.component';
import { AddItemDialogEntryComponent } from './components/track/add-item-dialog/add-item-dialog.component';
import { ItemsDialogEntryComponent } from './components/track/items/items-dialog.component';
import { CreateItemComponent } from './components/track/items/create-item/create-item.component';
import { EditItemComponent } from './components/track/items/edit-item/edit-item.component';

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
        component: AddItemDialogEntryComponent
      },
      {
        path: 'items',
        component: ItemsDialogEntryComponent,
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
    component: CreateItemComponent,
    outlet: 'items',
  }, 
  {
    path: '',
    component: EditItemComponent,
    outlet: 'items',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
