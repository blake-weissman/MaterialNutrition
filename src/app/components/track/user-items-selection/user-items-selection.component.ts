import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType, UserItem } from 'src/app/model/items';

@Component({
  selector: 'app-user-items-selection',
  templateUrl: './user-items-selection.component.html',
  styleUrls: ['./user-items-selection.component.scss']
})
export class UserItemsSelectionComponent {
  @Input() public selectedUserItemIndex: number;
  @Output() public selectedUserItemIndexChange = new EventEmitter<number>();
  @Output() public userItemSelected = new EventEmitter<{
    userItem: UserItem,
    userItemType: UserItemType,
  }>();
  
  public UserItemType = UserItemType;

  constructor(public userService: UserService) {}
  
  //TODO: Impelement
  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }
}
