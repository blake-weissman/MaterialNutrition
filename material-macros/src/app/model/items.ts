export type UserLogItem = UserFoodItem & {
  servings: number
};

export enum NutritionDataKeys {
  CALORIES = 'calories',
  FAT = 'fat',
  CARBS = 'carbs',
  PROTEIN = 'protein'
}

export class NutritionData {
  [NutritionDataKeys.CALORIES]: number = null;
  [NutritionDataKeys.FAT]: number = null;
  [NutritionDataKeys.CARBS]: number = null;
  [NutritionDataKeys.PROTEIN]: number = null;
}

export const macroKeys = [NutritionDataKeys.FAT, NutritionDataKeys.CARBS, NutritionDataKeys.PROTEIN];

export class UserFoodItem {
  name: string = null;
  [NutritionDataKeys.CALORIES]: number = null;
  [NutritionDataKeys.FAT]: number = null;
  [NutritionDataKeys.CARBS]: number = null;
  [NutritionDataKeys.PROTEIN]: number = null;
  amountPerServing: number = null;
  servingUnit: string = null;
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