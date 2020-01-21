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
  public meals = {
    other: [
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
    ],
    breakfast: [
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
  };

  public drop(event: CdkDragDrop<string[]>) {
    // debugger;
    console.log(event);
    // moveItemInArray(this.meals[key], event.previousIndex, event.currentIndex);
    // this.meals[key] = [...this.meals[key]];
  }

}
