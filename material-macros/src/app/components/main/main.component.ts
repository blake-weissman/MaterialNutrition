import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // TODO create proper global model/keys
  // public OTHER_MEAL_ITEMS_KEY;
  // public meals = [
  //     {
  //       {
  //         key: 'eggs',
  //         quantity: 20,
  //         type: 'food'
  //       },
  //       {
  //         key: 'pizza',
  //         quantity: 1,
  //         type: 'recipie'
  //       }
  //     },
  //     {
  //       {
  //         key: 'eggs',
  //         quantity: 20,
  //         type: 'food'
  //       },
  //       {
  //         key: 'pizza',
  //         quantity: 1,
  //         type: 'recipie'
  //       }
  //     },
  //   ]

  public meals = [
    {
      name: 'Other',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Breakfast',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Lunch',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
    {
      name: 'Dinner',
      mealItems: [
        {
          key: 'eggs',
          quantity: 20,
          type: 'food'
        },
        {
          key: 'pizza',
          quantity: 1,
          type: 'recipie'
        }
      ]
    },
  ]

  public userMealItems = {
    food: {
      eggs: {
        label: 'Eggs',
        grams: 20,
        calories: 80,
        fat: 4,
        carbs: 46,
        protien: 11 
      },
      oats: {
        label: 'Oats',
        grams: 45,
        calories: 100,
        fat: 14,
        carbs: 16,
        protien: 20 
      }
    },
    recipie: {
      pizza: {
        label: 'Pizza',
        foods: ['eggs', 'oats']
      }
    }
  }

  public test(v) {
    console.log(v);
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
    this.meals = [...this.meals];
  }

}
