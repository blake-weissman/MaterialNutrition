import { Component, Injector } from '@angular/core';
import { DialogEntryComponent } from '../dialog-entry/dialog-entry.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-items-dialog',
  templateUrl: './user-items-dialog.component.html',
  styleUrls: ['./user-items-dialog.component.scss']
})
export class UserItemsDialogComponent {
  constructor(public router: Router) {}
}

@Component({
  template: '',
})
export class UserItemsDialogEntryComponent extends DialogEntryComponent {
  constructor(
    protected injector: Injector,
    private activatedRoute: ActivatedRoute
  ) {
    super(injector, [UserItemsDialogComponent, {
      width: '315px'
    }], [['../']]);
    this.exitRouteParams[1] = {
      relativeTo: this.activatedRoute
    };
  }
}
