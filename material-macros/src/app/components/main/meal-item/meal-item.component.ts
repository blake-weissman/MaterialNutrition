import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent {
  @Input() item: any;

  public userMealItems = {
    food: {
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
      oats: {
        label: 'Oats',
        grams: 45,
        calories: 100,
        fat: 14,
        carbs: 16,
        protien: 20,
        servingTypes:{
          grams: {
            label: 'Grams',
            unit: 'g',
            servingSize: 20
          }
        }
      }
    },
    // recipie: {
    //   pizza: {
    //     label: 'Pizza',
    //     foods: ['eggs', 'oats']
    //   }
    // }
  }
}
