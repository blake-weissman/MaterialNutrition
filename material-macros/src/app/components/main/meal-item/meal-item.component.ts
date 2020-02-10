import { Component, OnInit, Input } from '@angular/core';
import { ItemType } from 'src/app/model/item-type';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent {
  @Input('mealItem') currentMealItem: any;

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
}
