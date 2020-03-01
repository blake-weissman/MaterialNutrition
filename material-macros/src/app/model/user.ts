import { LogItem, UserFoodItem, UserItemType, UserRecipeItem } from './items';
import { AppService } from '../services/app/app.service';

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
  items: UserItems = this.appService.convertCustomObjectToObject(new UserItems());
  darkTheme: boolean = false;

  constructor(private appService?: AppService) {}
}