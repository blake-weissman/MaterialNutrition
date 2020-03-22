import { Component, Output, EventEmitter, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserItemType, UserItem } from 'src/app/model/items';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/services/app/app.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user-items-selection',
  templateUrl: './user-items-selection.component.html',
  styleUrls: ['./user-items-selection.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({
          height: '0',
          opacity: 0
        }),
        animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          height: '*', 
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          height: '*',
          opacity: 1
        }),
        animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          height: '0', 
          opacity: 0
        }))
      ]),
    ]),
  ]
})
export class UserItemsSelectionComponent implements OnDestroy {
  @Input() public selectedUserItemIndex: number;
  @Output() public selectedUserItemIndexChange = new EventEmitter<number>();
  @Output() public userItemSelected = new EventEmitter<{
    userItem: UserItem,
    userItemType: UserItemType,
  }>();
  
  public UserItemType = UserItemType;
  private removeItemSnackBarSubscription: Subscription;

  constructor(
    public userService: UserService, 
    private matSnackBar: MatSnackBar,
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnDestroy() {
    if (this.removeItemSnackBarSubscription) {
      this.removeItemSnackBarSubscription.unsubscribe();
    }
  }
  
  //TODO: Impelement
  public filterItems(event) {
    event.stopPropagation();
    console.log(event);
  }

  public removeItem(index: number) {
    let userFoodItems = this.userService.user.items.food;
    const currentUserFoodItems = this.appService.deepCopy(userFoodItems);
    userFoodItems.splice(index, 1);
    const matSnackBar = this.matSnackBar.open('Removed "' + currentUserFoodItems[index].name + '".', 'Undo', {
      duration: 5000,
    });
    this.removeItemSnackBarSubscription = matSnackBar.afterDismissed().subscribe(res => {
      if (res.dismissedByAction) {
        this.userService.user.items.food = currentUserFoodItems;
        this.changeDetectorRef.detectChanges();
      }
      this.userService.getUserFirestoreDocument().set(this.appService.convertCustomObjectToObject(this.userService.user));
    });
  }
}
