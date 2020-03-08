import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogItem, UserFoodItem, NutritionKeys } from 'src/app/model/items';
import { MatTableDataSource } from '@angular/material/table';
import { UserLog } from 'src/app/model/user';
import { MatMenuTrigger } from '@angular/material/menu';

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
  public dataSource = new MatTableDataSource<UserLog>();
  public displayedColumns: string[] = Object.keys(new UserFoodItem());
  public currentDate = new Date();
  public totalNutrition: {
    [key in NutritionKeys]?: number;
  } = {};

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
    const selectedEpochUserLog = this.userService.user.log[this.userService.selectedEpoch];
    if (selectedEpochUserLog) {
      this.dataSource.data = this.userService.user.log[this.userService.selectedEpoch];
      Object.values(NutritionKeys).forEach(key => {
        this.totalNutrition[key] = this.dataSource.data.reduce((result, item) => {
          result += Number(item[key]);
          return result;
        }, 0);
      });
    }
  }

  public onDateSelect(date: Date): void {
    this.matMenuTrigger.closeMenu();
    this.router.navigateByUrl('/' + date.getTime());
  }
}