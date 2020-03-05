import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogItem, UserFoodItem } from 'src/app/model/items';
import { MatTableDataSource } from '@angular/material/table';
import { UserLog } from 'src/app/model/user';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public selectedDate = new Date();
  public dataSource = new MatTableDataSource<UserLog>();
  public displayedColumns: string[] = Object.keys(new UserFoodItem());
  public currentDate = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
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
  }
}