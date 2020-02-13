import { Injectable } from '@angular/core';

export interface MealItem {
  key: string, 
  servings: number, 
  type: ItemType, 
  units: string
}

export interface Meal {
  name: string, 
  items: MealItem[]
}

export interface UserItem {
  label: string,
  calories: number,
  fat: number,
  carbs: number,
  protien: number,
  servingTypes: {
    [key: string] : {
      label: string,
      unit: string,
      servingSize: number
    }
  } 
}

export enum ItemType {
  FOOD = "food",
  RECIPIE = "recipie"
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public datesTracked: {
    [key: number]: Meal[]
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

  public userItems: {
    [key: string]: {
      [key: string]: UserItem
    }
  } = {
    [ItemType.FOOD]: {
      eggs: {
        label: 'Eggs',
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
