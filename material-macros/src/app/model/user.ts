import { LogItem, UserFoodItem, UserItemType, UserRecipeItem } from './items';
import { AppService } from '../services/app/app.service';
import { Inject, Injectable, Injector } from '@angular/core';

export class UserItems {
  [UserItemType.FOOD]: UserFoodItem[] = [];
  [UserItemType.RECIPE]: UserRecipeItem[] = [];
}

export class User {
  log: {
    [key: number]: {
      name: string;
      items: LogItem[];
    }[]
  } = {};
  items: UserItems = AppService.prototype.convertCustomObjectToObject(new UserItems());
  darkTheme: boolean = false;
}