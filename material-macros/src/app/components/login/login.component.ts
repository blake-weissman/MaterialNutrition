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
    private router: Router,
    public userService: UserService,
  ) {}

  public signInSuccessWithAuthResult(event: any): void {
    const userFirestoreDocument = this.userService.getUserFirestoreDocument(event.authResult.user.uid);
    userFirestoreDocument.get().subscribe(response => {
      if (!response.exists) {
        userFirestoreDocument.set({
          log: {},
          items: {},
        }).then(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
