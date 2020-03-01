import { Component, OnInit } from '@angular/core';
import { UserFoodItem, UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  public userFoodItem: UserFoodItem = new UserFoodItem(); 
  public isFormInvalid: boolean;

  constructor(
    private userService: UserService,
    private appService: AppService,
    private matSnackBar: MatSnackBar
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
    });
  }
}

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   templateUrl: 'snack-bar-component-example-snack.html',
//   styles: [`
//     .example-pizza-party {
//       color: hotpink;
//     }
//   `],
// })
// export class PizzaPartyComponent {}
