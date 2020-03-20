import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isMobile: boolean;
  
  constructor() {
  }

  public convertCustomObjectToObject(object: any): any {
    return Object.assign({}, object);
  }

  public deepCopy<T>(target: T): T {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
      const copy = [] as any[];
      (target as any[]).forEach(value => { 
        copy.push(value); 
      });
      return copy.map((n: any) => this.deepCopy<any>(n)) as any;
    }
    if (typeof target === 'object' && target !== {}) {
      const copy = {
        ...(target as { 
          [key: string]: any 
        }) 
      } as { 
        [key: string]: any 
      };
      Object.keys(copy).forEach(key => {
        copy[key] = this.deepCopy<any>(copy[key]);
      });
      return copy as T;
    }
    return target;
  };
}
