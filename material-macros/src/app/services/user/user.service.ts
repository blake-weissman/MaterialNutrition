import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface MealItem {
  key: string, 
  servings: number,
  units: string
}

export interface UserItem {
  label: string,
  calories: number,
  fat: number,
  carbs: number,
  protien: number,
  type: ItemType
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

export interface User {
  id: string,
  log: {
    [key: number]: {
      name: string, 
      items: MealItem[]
    }[]
  }
  items: {
    [key: string]: UserItem
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedEpoch: string;

  // public datesTracked: {
  //   [key: number]: {
  //     name: string, 
  //     items: MealItem[]
  //   }[]
  // } = {
  //   1581224400000: [
  //     {
  //       name: 'Other',
  //       items: [
  //         {
  //           key: 'eggs',
  //           servings: 20,
  //           units: 'grams',
  //         },
  //         {
  //           key: 'eggs',
  //           servings: 20,
  //           units: 'grams',
  //         },
  //       ]
  //     }
  //   ]
  // }

  // public userItems: {
  //   [key: string]: UserItem
  // } = {
  //   eggs: {
  //     label: 'Eggs',
  //     calories: 80,
  //     fat: 4,
  //     carbs: 46,
  //     protien: 11,
  //     type: ItemType.FOOD,
  //     servingTypes:{
  //       grams: {
  //         label: 'Grams',
  //         unit: 'g',
  //         servingSize: 20
  //       },
  //       eggs: {
  //         label: 'Eggs',
  //         unit: 'Eggs',
  //         servingSize: 1
  //       }
  //     } 
  //   },
  // }

  public user: User;
}
