import { Injectable, Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedEpoch: string;
  public user: User;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    private router: Router,
    public matDialog: MatDialog
  ) {}

  public getUserFirestoreDocument(id?: string): AngularFirestoreDocument<User> {
    if (this.angularFireAuth.auth.currentUser) {
      id = this.angularFireAuth.auth.currentUser.uid;
      return this.angularFirestore.doc<User>('users/' + id);
    } else if (!id) {
      return;
    }
  }

  public async signOut(): Promise<void> {
    if (!this.angularFireAuth.auth.currentUser.email) {
      const dialog = this.matDialog.open(GuestSignOutDialog, {
        width: "400px",
        panelClass: "panel",
      });
      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.getUserFirestoreDocument().delete().then(() => {
            this.signUserOut();
          });
        }
      });
    }
    else {
      this.signUserOut();
    }
  }

  private async signUserOut(): Promise<void> {
    await this.angularFireAuth.auth.signOut();
    this.router.navigate(['login']).then(() => {
      this.user = null;
    });
  }
}


@Component({
  selector: 'app-guest-sign-out-dialog',
  templateUrl: 'guest-sign-out-dialog.html',
})
export class GuestSignOutDialog {
  constructor() {
  }
}
