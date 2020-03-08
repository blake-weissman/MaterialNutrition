import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NutritionData, NutritionDataKeys } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-goals-dialog',
  templateUrl: './goals-dialog.component.html',
  styleUrls: ['./goals-dialog.component.scss']
})
export class GoalsDialogComponent {
  public currentUserGoals: NutritionData = this.appService.deepCopy(this.userService.user.goals);
  public NutritionDataKeys = NutritionDataKeys;

  constructor(
    private userService: UserService,
    private appService: AppService,
  ) {}
}

@Component({
  template: '',
})
export class GoalsDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
  ) {
    const itemsDialog = this.matDialog.open(GoalsDialogComponent, {
      maxWidth: '275px',
    });
    this.redirectWhenClosedSubscription = itemsDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../']);
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
