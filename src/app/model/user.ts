import { UserFoodItem, UserItemType, UserRecipeItem, NutritionData, UserLogItem } from './items';
import { AppService } from '../services/app/app.service';

export class UserItems {
  [UserItemType.FOOD]: UserFoodItem[] = [];
  [UserItemType.RECIPE]: UserRecipeItem[] = [];
}

const matchMediaDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
export const browserPrefersDarkMode = matchMediaDarkMode && matchMediaDarkMode.matches;

export class User {
  log: {
    [key: number]: UserLogItem[]
  } = {};
  items: UserItems = AppService.prototype.convertCustomObjectToObject(new UserItems());
  darkTheme = browserPrefersDarkMode;
  goals: NutritionData = AppService.prototype.convertCustomObjectToObject(new NutritionData());
}
