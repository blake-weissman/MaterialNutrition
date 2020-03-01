import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamic'
})
export class DynamicPipe implements PipeTransform {
  transform(value: any, callback: Function): any {
    return callback(value);
  }
}
