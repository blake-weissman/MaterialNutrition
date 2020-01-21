import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys'
})
export class ObjectKeysPipe implements PipeTransform {
  transform(obj: object,): string[] {
    return Object.keys(obj);
  }
}
