import { LogItem, UserFoodItem, UserItemType, UserRecipeItem } from './items';
import { AppService } from '../services/app/app.service';
import { Inject, Injectable, Injector } from '@angular/core';

export class UserItems {
  [UserItemType.FOOD]: UserFoodItem[] = [];
  [UserItemType.RECIPE]: UserRecipeItem[] = [];
}

export interface UserLog {
  [key: number]: UserFoodItem[]
}

export class User {
  log: UserLog = {};
  items: UserItems = AppService.prototype.convertCustomObjectToObject(new UserItems());
  darkTheme: boolean = false;
}