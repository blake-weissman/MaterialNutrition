import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/model/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedEpoch: string;
  public user: User;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
  ) {}

  public getUserFirestoreDocument(id: string = this.angularFireAuth.auth.currentUser.uid): AngularFirestoreDocument<User> {
    return this.angularFirestore.doc<User>(`users/${id}`);
  }
}
