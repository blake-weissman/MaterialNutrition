import { Component, HostBinding, Directive, ViewChild, OnDestroy } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { OverlayContainer} from '@angular/cdk/overlay';
import { User } from './model/user';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild(MatMenuTrigger, {static: false}) matMenuTrigger: MatMenuTrigger;
  @HostBinding('class') get currentTheme() {
    const user: User = this.userService.user;
    return user && user.darkTheme ? 'dark-theme' : 'light-theme';
  };

  private authStateSubscription: Subscription;

  constructor(
    public userService: UserService,
    private router: Router,
  ) {
    this.authStateSubscription = this.userService.angularFireAuth.authState.subscribe(() => {});
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }

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
