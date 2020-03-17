import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
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
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public dataSource = new MatTableDataSource<UserLogItem>();
  public currentDate = new Date();
  public nutritionData: NutritionData = new NutritionData();

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    public appService: AppService
  ) {
    this.setIsMobile();
    window.onresize = () => { 
      this.setIsMobile();
    };
  }

  ngOnInit() {
    this.subscriptions = [
      this.activatedRoute.params.subscribe(params => {
        this.userService.selectedEpoch = params.date;
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

  private setIsMobile(): void {
    this.appService.isMobile = window.innerWidth < 599;
  }

  private setDataSource(): void {
    this.dataSource.data = this.userService.user.log[this.userService.selectedEpoch];
    if (this.dataSource.data) {
      this.setNutritionData();
    } else {
      Object.values(NutritionDataKeys).forEach(key => {
        this.nutritionData[key] = 0;
      });
    }
  }

  private setNutritionData(): void {
    Object.values(NutritionDataKeys).forEach(key => {
      this.nutritionData[key] = this.dataSource.data.reduce((result, item) => {
        result += Number(item[key]) * item.servings;
        return result;
      }, 0);
    });
  }

  public setNutritionDataAndUpdateFirestore(): void {
    this.setNutritionData();
    this.userService.getUserFirestoreDocument().update({
      log: {
        ...this.userService.user.log,
        [this.userService.selectedEpoch]: this.dataSource.data
      }
    });
  }

  public removeLogItem(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.setNutritionDataAndUpdateFirestore();
  }
}