import { Component, Input } from '@angular/core';
import { UserItem, MealItem } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-meal-item-stats',
  templateUrl: './meal-item-stats.component.html',
  styleUrls: ['./meal-item-stats.component.scss']
})
export class MealItemStatsComponent {
  @Input() mealItem: MealItem;
  @Input() userItem: UserItem;
}
