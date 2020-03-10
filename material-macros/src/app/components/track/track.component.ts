import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogItem, UserFoodItem, NutritionDataKeys, NutritionData, macroKeys } from 'src/app/model/items';
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
  public totalNutritionData: NutritionData = new NutritionData();
  public NutritionDataKeys = NutritionDataKeys;
  public macroKeys = macroKeys;

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
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
      Object.values(NutritionDataKeys).forEach(key => {
        this.totalNutritionData[key] = this.dataSource.data.reduce((result, item) => {
          result += Number(item[key]);
          return result;
        }, 0);
      });
    } else {
      Object.values(NutritionDataKeys).forEach(key => {
        this.totalNutritionData[key] = 0;
      });
    }
  }

  public onDateSelect(date: Date): void {
    this.matMenuTrigger.closeMenu();
    this.navigateToDate(date.getTime());
  }

  public navigateToDate(epoch: Number): void {
    this.router.navigateByUrl('/' + epoch);
    this.changeDetectorRef.detectChanges();
  }
}