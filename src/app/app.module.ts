import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TrackComponent } from './components/track/track.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ObjectKeysPipe } from './pipes/objectKeys/object-keys.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ObjectValuesPipe } from './pipes/objectValues/object-values.pipe';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateUserItemComponent, CreateUserItemEntryComponent } from './components/track/create-user-item/create-user-item.component';
import { EditUserItemsComponent, EditUserItemsEntryComponent } from './components/track/edit-user-items/edit-user-items.component';
import { UserFoodItemFormComponent } from './components/track/user-food-item-form/user-food-item-form.component';
import { DynamicPipe } from './pipes/dynamic/dynamic.pipe';
import { AddLogItemDialogComponent, AddLogItemDialogEntryComponent } from './components/track/add-log-item-dialog/add-log-item-dialog.component';
import { UserItemsSelectionComponent } from './components/track/user-items-selection/user-items-selection.component';
import { GoalsDialogComponent, GoalsDialogEntryComponent } from './components/track/goals-dialog/goals-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { LogItemsTableComponent } from './components/track/log-items-table/log-items-table.component';
import { GoalsDisplayComponent } from './components/track/goals-display/goals-display.component';
import { DateNavigationComponent } from './components/track/date-navigation/date-navigation.component';
import { TitleBarComponent } from './components/track/title-bar/title-bar.component';
import { IncludesPipe } from './pipes/includes/includes.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/login/login.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    ObjectKeysPipe,
    ObjectValuesPipe,
    CreateUserItemComponent,
    EditUserItemsComponent,
    UserFoodItemFormComponent,
    DynamicPipe,
    AddLogItemDialogComponent,
    AddLogItemDialogEntryComponent,
    UserItemsSelectionComponent,
    GoalsDialogComponent,
    GoalsDialogEntryComponent,
    LogItemsTableComponent,
    GoalsDisplayComponent,
    DateNavigationComponent,
    TitleBarComponent,
    IncludesPipe,
    CreateUserItemEntryComponent,
    EditUserItemsEntryComponent,
		LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    ScrollingModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    AngularFirestoreModule,
    MatMenuModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [
    AngularFireAuthGuard,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        closeOnNavigation: true,
      }
    }
  ],
  entryComponents: [
    AddLogItemDialogComponent,
    GoalsDialogComponent,
    CreateUserItemComponent,
    EditUserItemsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
