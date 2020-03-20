import { Component, HostBinding, Directive, ViewChild } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { OverlayContainer} from '@angular/cdk/overlay';
import { User } from './model/user';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger, {static: false}) matMenuTrigger: MatMenuTrigger;
  @HostBinding('class') get currentTheme() {
    const user: User = this.userService.user;
    return user && user.darkTheme ? 'dark-theme' : 'light-theme';
  };

  constructor(
    public userService: UserService,
    private router: Router,
  ) {}

  public async signOut(): Promise<void> {
    await this.userService.angularFireAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  public toggleDarkTheme() {
    this.userService.getUserFirestoreDocument().update({
      darkTheme: !this.userService.user.darkTheme
    });
  }
}
