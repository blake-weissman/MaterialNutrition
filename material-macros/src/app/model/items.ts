export interface LogItem {
  userFoodItem: UserFoodItem, 
  servings: number,
  units: string
}

export enum NutritionKeys {
  CALORIES = 'calories',
  FAT = 'fat',
  CARBS = 'carbs',
  PROTIEN = 'protien'
}

export class UserFoodItem {
  name: string = null;
  [NutritionKeys.CALORIES]: number = null;
  [NutritionKeys.FAT]: number = null;
  [NutritionKeys.CARBS]: number = null;
  [NutritionKeys.PROTIEN]: number = null;
  servingUnit: string = null;
  amountPerServing: number = null;
}

export interface UserRecipeItem {
  name: string,
  foods: UserFoodItem[] 
}

export enum UserItemType {
  FOOD = "food",
  RECIPE = "recipe"
}

export type UserItem = UserFoodItem | UserRecipeItem;