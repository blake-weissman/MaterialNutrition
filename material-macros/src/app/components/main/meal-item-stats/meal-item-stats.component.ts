import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-item-stats',
  templateUrl: './meal-item-stats.component.html',
  styleUrls: ['./meal-item-stats.component.scss']
})
export class MealItemStatsComponent {
  @Input() mealItem: any;
  @Input() userItem: any;
}
