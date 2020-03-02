import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-log-item-dialog',
  templateUrl: './add-log-item-dialog.component.html',
  styleUrls: ['./add-log-item-dialog.component.scss']
})
export class AddLogItemDialogComponent {}

@Component({
  template: '',
})
export class AddLogItemDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    private matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const addLogItemDialog = this.matDialog.open(AddLogItemDialogComponent);
    this.redirectWhenClosedSubscription = addLogItemDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
