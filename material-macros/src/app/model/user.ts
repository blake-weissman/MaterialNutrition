import { LogItem, UserItem } from './items';

export interface User {
  log: {
    [key: number]: {
      name: string, 
      items: LogItem[]
    }[]
  }
  items: {
    [key: string]: UserItem
  },
  darkTheme: boolean
}