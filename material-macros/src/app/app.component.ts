import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public userService: UserService,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {}

  public async logout(): Promise<void> {
    await this.angularFireAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
