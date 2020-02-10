import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.dateSubscription = this.activatedRoute.params.subscribe(params => {
      this.meals = this.days[params.date];
      // console.log(params['date']);
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

  // public drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
  //   this.meals = [...this.meals];
  // }
}
