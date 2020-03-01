import { LogItem, UserFoodItem, UserItemType, UserRecipeItem } from './items';

class UserItems {
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
  items: UserItems = Object.assign({}, new UserItems());
  darkTheme: boolean = false;
}