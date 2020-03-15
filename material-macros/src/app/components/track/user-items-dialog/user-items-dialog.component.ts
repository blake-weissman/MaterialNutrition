import { Component, Injector } from '@angular/core';
import { DialogEntryComponent } from '../dialog-entry/dialog-entry.component';

@Component({
  selector: 'app-user-items-dialog',
  templateUrl: './user-items-dialog.component.html',
  styleUrls: ['./user-items-dialog.component.scss']
})
export class UserItemsDialogComponent {}

@Component({
  template: '',
})
export class UserItemsDialogEntryComponent extends DialogEntryComponent {
  constructor(protected injector: Injector) {
    super(injector, [UserItemsDialogComponent, {
      width: '315px'
    }], [['../']]);
  }
}
