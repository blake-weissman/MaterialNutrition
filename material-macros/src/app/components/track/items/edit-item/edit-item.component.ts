import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType, UserFoodItem, UserRecipeItem } from 'src/app/model/items';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  public UserItemType = UserItemType;
  public selectedUserItemIndex: number;
  public selectedUserFoodItem: UserFoodItem;
  public selectedUserRecipeItem: UserRecipeItem;
  
  constructor(public userService: UserService) {}

  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }

  public selectUserItem(item: UserFoodItem | UserRecipeItem, type: UserItemType) {
    if (type === UserItemType.FOOD) {
      this.selectedUserFoodItem = item as UserFoodItem;
    } else {
      this.selectedUserRecipeItem = item as UserRecipeItem;
    }
  }
}
