import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-stats',
  templateUrl: './item-stats.component.html',
  styleUrls: ['./item-stats.component.scss']
})
export class ItemStatsComponent {
  @Input() item: any;
  @Input() currentMealItem: any;
}
