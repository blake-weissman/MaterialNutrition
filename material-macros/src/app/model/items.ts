export interface LogItem {
  userFoodItem: UserFoodItem, 
  servings: number,
  units: string
}

export class UserFoodItem {
  name: string = null;
  calories: number = null;
  fat: number = null;
  carbs: number = null;
  protien: number = null;
  servingUnitName: string = null;
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