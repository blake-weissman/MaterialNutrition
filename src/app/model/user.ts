import { UserFoodItem, UserItemType, UserRecipeItem, NutritionData, UserLogItem } from './items';
import { AppService } from '../services/app/app.service';

export class UserItems {
  [UserItemType.FOOD]: UserFoodItem[] = [];
  [UserItemType.RECIPE]: UserRecipeItem[] = [];
}

const matchMediaDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

export class User {
  log: {
    [key: number]: UserLogItem[]
  } = {};
  items: UserItems = AppService.prototype.convertCustomObjectToObject(new UserItems());
  darkTheme: boolean = matchMediaDarkMode ? matchMediaDarkMode.matches : false;
  goals: NutritionData = AppService.prototype.convertCustomObjectToObject(new NutritionData());
}
