import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys'
})
export class ObjectKeysPipe implements PipeTransform {
  transform(value: object): string[] {
    return Object.keys(value);
  }
}
