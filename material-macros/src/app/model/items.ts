export interface LogItem {
  userFoodItem: UserFoodItem, 
  servings: number,
  units: string
}

export class UserFoodItem {
  name: string = null;
  calories: number = null;
  fat: number = null;
  carbohydrates: number = null;
  protien: number = null;
  servingTypes: {
    [key: string] : {
      name: string,
      unit: string,
      servingSize: number
    }
  } = {};
}

export interface UserRecipeItem {
  name: string,
  foods: UserFoodItem[] 
}

export enum UserItemType {
  FOOD = "food",
  RECIPE = "recipe"
}