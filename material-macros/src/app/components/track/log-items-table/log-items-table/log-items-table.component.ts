import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NutritionDataKeys, UserFoodItem, UserLogItem, macroKeys } from 'src/app/model/items';
import { MatTableDataSource } from '@angular/material/table';
import { positiveIntegersRegex } from 'src/app/consts';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-log-items-table',
  templateUrl: './log-items-table.component.html',
  styleUrls: ['./log-items-table.component.scss']
})
export class LogItemsTableComponent implements OnInit {
  @Input() public dataSource: MatTableDataSource<UserLogItem>;
  @Input() private makeItemsRemovable: boolean;
  @Output() public servingsChanged = new EventEmitter<UserLogItem>();
  @Output() public removeClicked = new EventEmitter<number>();
  @Output() public servingsValidityChanged = new EventEmitter<boolean>();

  private userFoodItemKeys = Object.keys(new UserFoodItem());
  public nutritionDataKeysWithAmountKey = [...Object.values(NutritionDataKeys), 'amount'];
  public displayedColumns: string[] = [...this.userFoodItemKeys.slice(0, this.userFoodItemKeys.length - 2), 'amount', 'servings'];
  public positiveIntegersRegex = positiveIntegersRegex;
  public macroKeys = macroKeys;

  constructor(public appService: AppService) {}

  ngOnInit() {
    if (this.makeItemsRemovable) {
     this.displayedColumns.push('remove');
    }
  }

  public onServingsBlur(userLogItem: UserLogItem): void {
    if (!userLogItem.servings) {
      userLogItem.servings = 0;
    }
    this.servingsChanged.emit(userLogItem);
  }
}
