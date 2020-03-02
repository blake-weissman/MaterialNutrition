import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType, UserFoodItem, UserRecipeItem } from 'src/app/model/items';
import { AppService } from 'src/app/services/app/app.service';

type UserItem = UserFoodItem | UserRecipeItem;

@Component({
  selector: 'app-edit-user-items',
  templateUrl: './edit-user-items.component.html',
  styleUrls: ['./edit-user-items.component.scss']
})
export class EditUserItemsComponent {
  public UserItemType = UserItemType;
  public selectedUserItemIndex: number;
  public selectedUserItem: UserItem;
  public selectedUserItemType: UserItemType;
  public isFormInvalid: boolean;
  public currentUserItem: UserItem;
  
  constructor(
    public userService: UserService,
    public appService: AppService
  ) {}

  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }

  public selectUserItem(userItem: UserItem, userItemType: UserItemType): void {
    this.selectedUserItemType = userItemType;
    ["currentUserItem", "selectedUserItem"].forEach((property) => this[property] = this.appService.deepCopy<UserItem>(userItem));
  }
}
