import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: any): string {
    return this.decimalPipe.transform(value, "0.0-2");
  }
}
