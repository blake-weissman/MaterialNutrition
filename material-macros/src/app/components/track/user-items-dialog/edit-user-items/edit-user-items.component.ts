import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType, UserItem } from 'src/app/model/items';
import { UserItems } from 'src/app/model/user';
import { AppService } from 'src/app/services/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { expand } from 'src/app/consts';

@Component({
  selector: 'app-edit-user-items',
  templateUrl: './edit-user-items.component.html',
  styleUrls: ['./edit-user-items.component.scss'],
  animations: expand
})
export class EditUserItemsComponent {
  public UserItemType = UserItemType;
  public selectedUserItemIndex: number;
  public selectedUserItem: UserItem;
  public selectedUserItemType: UserItemType;
  public isFormInvalid: boolean;
  public currentUserItem: UserItem;
  
  constructor(
    private userService: UserService,
    public appService: AppService,
    private matSnackBar: MatSnackBar,
  ) {}

  public userItemSelected(userItem: UserItem, userItemType: UserItemType): void {
    this.selectedUserItemType = userItemType;
    ["currentUserItem", "selectedUserItem"].forEach((property) => this[property] = this.appService.deepCopy<UserItem>(userItem));
  }

  public saveItem(): void {
    let newUserItems = this.appService.deepCopy<UserItems>(this.userService.user.items);
    newUserItems[this.selectedUserItemType][this.selectedUserItemIndex] = this.currentUserItem;
    this.userService.getUserFirestoreDocument().update(this.appService.convertCustomObjectToObject({
      items: newUserItems
    })).then(() => {
      this.selectedUserItem = this.appService.deepCopy(this.currentUserItem);
      this.matSnackBar.open('"' + this.currentUserItem.name + '" was successfully saved.', 'Dismiss', {
        duration: 5000,
      })
    });
  }
}
