import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType } from 'src/app/model/items';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  public UserItemType = UserItemType;
  public selectedUserFoodItemIndex: number;

  constructor(public userService: UserService) {}

  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }

}
