import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {
  transform(string: string, substring: string): boolean {
    return string.includes(substring);
  }
}
