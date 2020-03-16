import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { UserItem, UserItemType, UserLogItem } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';
import { DialogEntryComponent } from '../dialog-entry/dialog-entry.component';
import { expand } from 'src/app/consts';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-add-log-item-dialog',
  templateUrl: './add-log-item-dialog.component.html',
  styleUrls: ['./add-log-item-dialog.component.scss'],
  animations: expand
})
export class AddLogItemDialogComponent {
  public newUserLogItem: UserLogItem;
  public servingsInvalid: boolean;
  
  constructor (
    private userService: UserService,
    private appService: AppService,
  ) {}

  public userItemSelected(userItem: UserItem): void {
    this.newUserLogItem = {
      ...userItem,
      servings: 1
    } as UserLogItem;
    this.servingsInvalid = false;
  }

  public addNewLogItem(): void {
    const selectedEpochLog = this.userService.user.log[this.userService.selectedEpoch];
    this.userService.getUserFirestoreDocument().update(this.appService.convertCustomObjectToObject({
      log: {
        ...this.userService.user.log,
        [this.userService.selectedEpoch]: [...(selectedEpochLog ? selectedEpochLog : []), this.newUserLogItem]
      }
    }));
  }
}

@Component({
  template: '',
})
export class AddLogItemDialogEntryComponent extends DialogEntryComponent {
  constructor(
    protected injector: Injector,
  ) {
    super(injector, [AddLogItemDialogComponent, {
      width: '650px'
    }], [['../']]);
  }
}
