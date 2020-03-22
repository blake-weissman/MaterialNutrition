import { Component, Injector } from '@angular/core';
import { UserFoodItem, UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogEntryComponent } from '../dialog-entry/dialog-entry.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-user-item',
  templateUrl: './create-user-item.component.html',
  styleUrls: ['./create-user-item.component.scss']
})
export class CreateUserItemComponent {
  public userFoodItem: UserFoodItem = new UserFoodItem(); 
  public isFormInvalid: boolean;

  constructor(
    public userService: UserService,
    private appService: AppService,
    private matSnackBar: MatSnackBar,
    public location: Location
  ) {}

  public createFoodItem(): void {
    this.userService.getUserFirestoreDocument().update(this.appService.convertCustomObjectToObject({
      items: {
        [UserItemType.FOOD]: [...this.userService.user.items[UserItemType.FOOD], this.appService.convertCustomObjectToObject(this.userFoodItem)],
        [UserItemType.RECIPE]: this.userService.user.items[UserItemType.RECIPE],
      }
    })).then(() => {
      this.matSnackBar.open('"' + this.userFoodItem.name + '" was successfully created.', 'Dismiss', {
        duration: 5000,
      })
      this.location.back();
    });
  }
}

@Component({
  template: '',
})
export class CreateUserItemEntryComponent extends DialogEntryComponent {
  constructor(
    protected injector: Injector,
    private activatedRoute: ActivatedRoute,
  ) {
    super(injector, [CreateUserItemComponent, {
      width: '315px',
    }], [['..']]);
    this.exitRouteParams[1] = {
      relativeTo: this.activatedRoute
    };
  }
}
