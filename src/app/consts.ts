import { trigger, transition, style, animate } from '@angular/animations';

export const positiveIntegersRegex = '[0-9]{1,9}(?:\.[0-9]{1,2})?$';
export const expand = [
  trigger('expand', [
    transition(':enter', [
      style({
        height: '0',
      }),
      animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
        height: '*', 
      }))
    ]),
    transition(':leave', [
      style({
        height: '*',
      }),
      animate('200ms 75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
        height: '0', 
      }))
    ]),
  ]),
]