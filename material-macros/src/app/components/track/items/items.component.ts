import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsDialogComponent {
  // public userItems = this.userService.user.items;
  public UserItemType = UserItemType;

  constructor(public userService: UserService) {
  }

  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }
}

@Component({
  template: '',
})
export class ItemsDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const itemsDialog = this.matDialog.open(ItemsDialogComponent);
    this.redirectWhenClosedSubscription = itemsDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
