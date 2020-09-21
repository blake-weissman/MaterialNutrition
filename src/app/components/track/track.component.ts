import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { NutritionDataKeys, NutritionData, UserLogItem } from 'src/app/model/items';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/services/app/app.service';
import { User } from 'src/app/model/user';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public dataSource = new MatTableDataSource<UserLogItem>();
  public nutritionData: NutritionData = new NutritionData();

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    public appService: AppService,
    private router: Router
  ) {
    this.setIsMobile();
    window.onresize = () => {
      this.setIsMobile();
    };
  }

  ngOnInit() {
    this.userService.angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user && !this.subscriptions) {
        this.subscriptions = [
          this.userService.getUserFirestoreDocument().valueChanges().subscribe(value => {
            this.userService.user = value;
            if (this.userService.user) {
              this.setDataSource();
              this.openGoalsIfNoneExist();
            }
          }),
          this.activatedRoute.params.subscribe(params => {
            if (!params.date) {
              this.router.navigate([String(new Date().setHours(0,0,0,0))]);
            } else {
              this.userService.selectedEpoch = params.date;
              if (this.userService.user) {
                this.setDataSource();
                this.openGoalsIfNoneExist();
              }
            }
          }),
        ];
      }
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  private openGoalsIfNoneExist(): void {
    if (!this.userService.user.goals.calories) {
      this.router.navigate([this.userService.selectedEpoch + '/goals']);
    }
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
