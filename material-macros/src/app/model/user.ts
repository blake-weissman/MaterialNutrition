import { LogItem, UserFoodItem, UserItemType, UserRecipeItem } from './items';

type UserItems = {
  [UserItemType.FOOD]: UserFoodItem[];
  [UserItemType.RECIPE]: UserRecipeItem[];
}

export class User {
  log: {
    [key: number]: {
      name: string;
      items: LogItem[];
    }[]
  };
  items: UserItems;
  darkTheme: boolean;

  constructor() {
    this.log = {};
    this.darkTheme = false;
    this.items = Object.values(UserItemType).reduce((result, userItemTypeKey) => {
      result[userItemTypeKey] = [];
      return result;
    }, {}) as UserItems;
    Object.values(UserItemType).forEach(userItemTypeKey => {
      this.items[userItemTypeKey] = [];
    });
  }
}