export interface LogItem {
  key: string, 
  servings: number,
  units: string
}

export interface UserItem {
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

export enum UserItemType {
  FOOD = "food",
  RECIPE = "recipe"
}