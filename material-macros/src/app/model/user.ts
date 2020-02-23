import { LogItem, UserItem, UserItemType } from './items';

export class User {
  log: {
    [key: number]: {
      name: string, 
      items: LogItem[]
    }[]
  };
  items: {
    [key in UserItemType]: UserItem[]
  };
  darkTheme: boolean;
  
  constructor() {
    this.log = {};
    this.items = {
      [UserItemType.FOOD]: [],
      [UserItemType.RECIPIE]: []
    };
    this.darkTheme = false;
  }
}