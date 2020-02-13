import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemType } from 'src/app/model/item-type';

interface Meals {
  name: string, 
  items: {
    key: string, 
    servings: number, 
    type: ItemType, 
    units: string
  }[]
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private dateSubscription: Subscription;
  public meals: Meals[];
  public selectedDate = new Date();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.dateSubscription = this.activatedRoute.params.subscribe(params => {
      this.selectedDate = new Date(Number(params.date));
      this.meals = this.days[params.date];
    });
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }

  onDateSelect(date: Date): void {
    this.router.navigateByUrl('/' + date.getTime());
  } 
  
  public days: {
    [key: number]: Meals[]
  } = {
    1581224400000: [
      {
        name: 'Other',
        items: [
          {
            key: 'eggs',
            servings: 20,
            type: ItemType.FOOD,
            units: 'grams',
          },
          {
            key: 'eggs',
            servings: 20,
            type: ItemType.FOOD,
            units: 'grams',
          },
        ]
      }
    ]
  }

  public userItems = {
    [ItemType.FOOD]: {
      eggs: {
        label: 'Eggs',
        grams: 20,
        calories: 80,
        fat: 4,
        carbs: 46,
        protien: 11,
        servingTypes:{
          grams: {
            label: 'Grams',
            unit: 'g',
            servingSize: 20
          },
          eggs: {
            label: 'Eggs',
            unit: 'Eggs',
            servingSize: 1
          }
        } 
      },
    },
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
    const addItemDialog = this.matDialog.open(AddItemDialogComponent, {
      width: '700px'
    });
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
  styleUrls: ['./add-item-dialog.scss']
})
export class AddItemDialogComponent {}