import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedEpoch: string;
  public user: User;

  constructor(private angularFirestore: AngularFirestore) {}

  public getUserFirestoreDocument(id: string): AngularFirestoreDocument<User> {
    return this.angularFirestore.doc<User>(`users/${id}`)
  }
}
