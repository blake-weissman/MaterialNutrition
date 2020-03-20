import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {
  transform(value: object): string[] {
    return Object.values(value);
  }
}
