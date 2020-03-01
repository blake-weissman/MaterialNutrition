import { Component, OnInit } from '@angular/core';
import { UserFoodItem, UserItemType } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/user';

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
  ) {}

  public createFoodItem(): void {
    this.userService.getUserFirestoreDocument().update(Object.assign({}, {
      items: {
        [UserItemType.FOOD]: [...this.userService.user.items[UserItemType.FOOD], Object.assign({}, this.userFoodItem)]
      }
    }) as User);
  }
}
