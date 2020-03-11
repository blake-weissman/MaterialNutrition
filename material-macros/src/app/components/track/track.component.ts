import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserFoodItem, NutritionDataKeys, NutritionData, macroKeys, UserLogItem } from 'src/app/model/items';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { positiveIntegersRegex } from 'src/app/consts';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger, {
    static: false
  }) matMenuTrigger: MatMenuTrigger;

  private subscriptions: Subscription[];
  public selectedDate = new Date();
  public dataSource = new MatTableDataSource<UserLogItem>();
  private userFoodItemKeys = Object.keys(new UserFoodItem());
  private displayedUserFoodItemPropertyKeys = this.userFoodItemKeys.slice(0, this.userFoodItemKeys.length - 2);
  public displayedColumns: string[] = [...this.displayedUserFoodItemPropertyKeys, 'amount', 'servings'];
  public nutritionDataKeysWithAmountKey = [...Object.values(NutritionDataKeys), 'amount'];
  public currentDate = new Date();
  public totalNutritionData: NutritionData = new NutritionData();
  public NutritionDataKeys = NutritionDataKeys;
  public macroKeys = macroKeys;
  public positiveIntegersRegex = positiveIntegersRegex;

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subscriptions = [
      this.activatedRoute.params.subscribe(params => {
        this.userService.selectedEpoch = params.date;
        this.selectedDate = new Date(Number(this.userService.selectedEpoch));
        if (this.userService.user) {
          this.setDataSource();
        }
      }),
      this.userService.getUserFirestoreDocument().valueChanges().subscribe(value => {
        this.userService.user = value;
        this.setDataSource();
      })
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private setDataSource(): void {
    this.dataSource.data = this.userService.user.log[this.userService.selectedEpoch];
    if (this.dataSource.data) {
      this.setTotalNutritionData();
    } else {
      Object.values(NutritionDataKeys).forEach(key => {
        this.totalNutritionData[key] = 0;
      });
    }
  }

  private setTotalNutritionData(): void {
    Object.values(NutritionDataKeys).forEach(key => {
      this.totalNutritionData[key] = this.dataSource.data.reduce((result, item) => {
        result += Number(item[key]) * item.servings;
        return result;
      }, 0);
    });
  }

  public onDateSelect(date: Date): void {
    this.matMenuTrigger.closeMenu();
    this.navigateToDate(date.getTime());
  }

  public navigateToDate(epoch: Number): void {
    this.router.navigateByUrl('/' + epoch);
  }

  public saveLogItem(userLogItem: UserLogItem): void {
    if (!userLogItem.servings) {
      userLogItem.servings = 0;
    }
    this.setTotalNutritionData();
    this.userService.getUserFirestoreDocument().update({
      log: {
        ...this.userService.user.log,
        [this.userService.selectedEpoch]: this.dataSource.data
      }
    });
  }
}