import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/services/user/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private angularFirestore: AngularFirestore,
    private router: Router,
    private userService: UserService,
  ) {}

  public signInSuccessWithAuthResult(event: any): void {
    let userFirestoreDocument = this.angularFirestore.doc<User>(`users/${event.authResult.user.uid}`);
    userFirestoreDocument.get().subscribe(response => {
      if (response.exists) {
        this.userService.user = response.data();
      } else {
        this.userService.user = {
          id: event.authResult.user.uid,
          log: {},
          items: {},
        };
        userFirestoreDocument.set(this.userService.user);
      }
      this.router.navigate(['/']);
    })
  }
}
