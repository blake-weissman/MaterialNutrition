import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedEpoch: string;
  public user: User;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    private router: Router
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
    await this.angularFireAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
