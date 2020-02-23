export interface LogItem {
  userFoodItem: UserFoodItem, 
  servings: number,
  units: string
}

export interface UserFoodItem {
  label: string,
  calories: number,
  fat: number,
  carbs: number,
  protien: number,
  servingTypes: {
    [key: string] : {
      label: string,
      unit: string,
      servingSize: number
    }
  } 
}

export interface UserRecipeItem {
  label: string,
  foods: UserFoodItem[] 
}

export enum UserItemType {
  FOOD = "food",
  RECIPE = "recipe"
}