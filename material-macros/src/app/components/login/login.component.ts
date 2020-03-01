import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/user';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private router: Router,
    public userService: UserService,
    private appService: AppService
  ) {}

  public signInSuccessWithAuthResult(event: any): void {
    const userFirestoreDocument = this.userService.getUserFirestoreDocument(event.authResult.user.uid);
    userFirestoreDocument.get().subscribe(response => {
      if (!response.exists) {
        userFirestoreDocument.set(this.appService.convertCustomObjectToObject(new User())).then(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
