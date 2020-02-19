import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService, UserItem, MealItem } from 'src/app/services/user/user.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/auth';

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
    private angualrFireAuth: AngularFireAuth,
  ) {}

  ngOnInit() { 
    this.subscriptions = [
      this.activatedRoute.params.subscribe(params => {
        this.userService.selectedEpoch = params.date;
        this.selectedDate = new Date(Number(this.userService.selectedEpoch));
      }),
      this.userService.getUserFirestoreDocument(this.angualrFireAuth.auth.currentUser.uid).valueChanges().subscribe(value => {
        console.log('set');
        this.userService.user = value;
      })
    ];
  }

  onDateSelect(date: Date): void {
    this.router.navigateByUrl('/' + date.getTime());
  } 

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  // public drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
  //   this.meals = [...this.meals];
  // }
}

@Component({
  template: '',
})
export class AddItemDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const addItemDialog = this.matDialog.open(AddItemDialogComponent);
    this.redirectWhenClosedSubscription = addItemDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}

@Component({
  selector: 'add-item-dialog',
  templateUrl: 'add-item-dialog.html',
  styleUrls: ['./add-item-dialog.scss'],
  //TODO: Fix dialog width issues related to this aniamtion
  animations: [
    trigger('userItemSelected', [
      transition(':enter', [
        style({
          height: '0',
        }),
        animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          height: '*', 
        }))
      ]),
    ]),
  ],
})
export class AddItemDialogComponent {
  public mealItem: MealItem = {
    key: null, 
    servings: 1,
    units: null
  }

  constructor(
    public userService: UserService,
  ) {

  }

  public addItem(): void {
    let currentDate = this.userService.user.log[this.userService.selectedEpoch];
    if (currentDate) {
      currentDate[0].items.push(this.mealItem);
    } else {
      this.userService.user.log[this.userService.selectedEpoch] = [{
        name: 'Other',
        items: [this.mealItem]
      }]
    }
  }
}