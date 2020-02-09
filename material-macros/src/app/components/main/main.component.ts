import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private router: Router,
    ) {
  }

  onDateSelect(date: Date): void {
    this.router.navigateByUrl('/' + date.getTime());
  } 
  
  public days = {

  }

  // TODO create proper global model/keys
  public meals = [
    {
      name: 'Other',
      mealItems: [
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        {
          key: 'eggs',
          servings: 20,
          type: 'food',
          units: 'grams',
        },
        // {
        //   key: 'pizza',
        //   servings: 1,
        //   type: 'recipie',
        //   units: 'grams',
        // }
      ]
    },
    // {
    //   name: 'Breakfast',
    //   mealItems: [
    //     {
    //       key: 'eggs',
    //       servings: 20,
    //       type: 'food',
    //       units: 'grams',
    //     },
    //     // {
    //     //   key: 'pizza',
    //     //   servings: 1,
    //     //   type: 'recipie',
    //     //   units: 'grams',
    //     // }
    //   ]
    // },
    // {
    //   name: 'Lunch',
    //   mealItems: [
    //     {
    //       key: 'eggs',
    //       servings: 20,
    //       type: 'food',
    //       units: 'grams',
    //     },
    //     // {
    //     //   key: 'pizza',
    //     //   servings: 1,
    //     //   type: 'recipie',
    //     //   units: 'grams',
    //     // }
    //   ]
    // },
    // {
    //   name: 'Dinner',
    //   mealItems: [
    //     {
    //       key: 'eggs',
    //       servings: 20,
    //       type: 'food',
    //       units: 'grams',
    //     },
    //     // {
    //     //   key: 'pizza',
    //     //   servings: 1,
    //     //   type: 'recipie',
    //     //   units: 'grams',
    //     // }
    //   ]
    // },
  ]

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
    this.meals = [...this.meals];
  }
}
