import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() {}

  public convertCustomObjectToObject(object: object): object {
    return Object.assign({}, object);
  }
}
