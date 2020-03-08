import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-dialog',
  templateUrl: './goals-dialog.component.html',
  styleUrls: ['./goals-dialog.component.scss']
})
export class GoalsDialogComponent {}

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
      maxWidth: '400px',
    });
    this.redirectWhenClosedSubscription = itemsDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../']);
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
