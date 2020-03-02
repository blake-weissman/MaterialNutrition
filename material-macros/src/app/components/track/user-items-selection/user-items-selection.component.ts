import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType } from 'src/app/model/items';

@Component({
  selector: 'app-user-items-selection',
  templateUrl: './user-items-selection.component.html',
  styleUrls: ['./user-items-selection.component.scss']
})
export class UserItemsSelectionComponent {
  public UserItemType = UserItemType;

  constructor(public userService: UserService) {}
  
  //TODO: Implement
  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }
}
