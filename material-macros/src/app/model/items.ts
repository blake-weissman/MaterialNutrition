export interface LogItem {
  userFoodItem: UserFoodItem, 
  servings: number,
  units: string
}

export class UserFoodItem {
  label: string = null;
  calories: number = null;
  fat: number = null;
  carbs: number = null;
  protien: number = null;
  servingTypes: {
    [key: string] : {
      label: string,
      unit: string,
      servingSize: number
    }
  } = {};
}

export interface UserRecipeItem {
  label: string,
  foods: UserFoodItem[] 
}

export enum UserItemType {
  FOOD = "food",
  RECIPE = "recipe"
}