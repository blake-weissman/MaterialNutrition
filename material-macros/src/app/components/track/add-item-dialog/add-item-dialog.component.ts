import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogItem } from 'src/app/model/items';

@Component({
  selector: 'add-item-dialog',
  templateUrl: 'add-item-dialog.html',
  styleUrls: ['./add-item-dialog.scss'],
  //TODO: Fix dialog width issues related to this aniamtion
  animations: [
    trigger('userItemSelected', [
      transition(':enter', [
        style({
          height: '0',
        }),
        animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          height: '*', 
        }))
      ]),
    ]),
  ],
})
export class AddItemDialogComponent {
  // public logItem: LogItem = {
  //   key: null, 
  //   servings: 1,
  //   units: null
  // }

  // constructor(public userService: UserService) {}

  // public addItem(): void {
  //   let currentDate = this.userService.user.log[this.userService.selectedEpoch];
  //   if (currentDate) {
  //     currentDate[0].items.push(this.logItem);
  //   } else {
  //     this.userService.user.log[this.userService.selectedEpoch] = [{
  //       name: 'Other',
  //       items: [this.logItem]
  //     }]
  //   }
  // }
}

@Component({
  template: '',
})
export class AddItemDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const addItemDialog = this.matDialog.open(AddItemDialogComponent);
    this.redirectWhenClosedSubscription = addItemDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}