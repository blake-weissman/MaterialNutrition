import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogItem } from 'src/app/model/items';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];
  public selectedDate = new Date();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
  ) {}

  ngOnInit() { 
    this.subscriptions = [
      this.activatedRoute.params.subscribe(params => {
        this.userService.selectedEpoch = params.date;
        this.selectedDate = new Date(Number(this.userService.selectedEpoch));
      }),
      this.userService.getUserFirestoreDocument().valueChanges().subscribe(value => {
        this.userService.user = value;
      })
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  // public drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
  //   this.meals = [...this.meals];
  // }
}