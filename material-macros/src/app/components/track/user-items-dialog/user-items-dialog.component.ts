import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-items-dialog',
  templateUrl: './user-items-dialog.component.html',
  styleUrls: ['./user-items-dialog.component.scss']
})
export class UserItemsDialogComponent {}

@Component({
  template: '',
})
export class UserItemsDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
  ) {
    const itemsDialog = this.matDialog.open(UserItemsDialogComponent, {
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
