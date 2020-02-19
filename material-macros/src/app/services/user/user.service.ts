import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

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
  public user: User;

  constructor(private angularFirestore: AngularFirestore) {}

  public getUserFirestoreDocument(id: string): AngularFirestoreDocument<User> {
    return this.angularFirestore.doc<User>(`users/${id}`)
  }
}
