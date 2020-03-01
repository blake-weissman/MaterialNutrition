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
import { LoginComponent } from './components/login/login.component';
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
import { LogItemStatsComponent } from './components/track/log-item-stats/log-item-stats.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddItemDialogComponent, AddItemDialogEntryComponent } from './components/track/add-item-dialog/add-item-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { ItemsDialogComponent, ItemsDialogEntryComponent } from './components/track/items/items-dialog.component';
import { CreateItemComponent } from './components/track/items/create-item/create-item.component';
import { EditItemComponent } from './components/track/items/edit-item/edit-item.component';
import { ItemFormComponent } from './components/track/items/item-form/item-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrackComponent,
    ObjectKeysPipe,
    ObjectValuesPipe,
    AddItemDialogComponent,
    AddItemDialogEntryComponent,
    LogItemStatsComponent,
    ItemsDialogComponent,
    ItemsDialogEntryComponent,
    CreateItemComponent,
    EditItemComponent,
    ItemFormComponent,
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
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    MatMenuModule,
    MatChipsModule,
    MatSnackBarModule
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
    AddItemDialogComponent,
    ItemsDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
