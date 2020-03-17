import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-date-navigation',
  templateUrl: './date-navigation.component.html',
  styleUrls: ['./date-navigation.component.scss']
})
export class DateNavigationComponent implements OnDestroy {
  @ViewChild(MatMenuTrigger, {
    static: false
  }) matMenuTrigger: MatMenuTrigger;

  public selectedDate = new Date();
  private navigationSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.navigationSubscription = this.activatedRoute.params.subscribe(params => {
      this.selectedDate = new Date(Number(this.userService.selectedEpoch));
    })
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  public onDateSelect(date: Date): void {
    this.matMenuTrigger.closeMenu();
    this.navigateToDate(date.getTime());
  }

  public navigateToDate(epoch: Number): void {
    this.router.navigateByUrl('/' + epoch);
  }
}
