import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() {}

  public convertCustomObjectToObject(object: any): any {
    return Object.assign({}, object);
  }
}
