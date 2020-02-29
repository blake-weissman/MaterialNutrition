import { Component, OnInit, Input } from '@angular/core';
import { UserFoodItem } from 'src/app/model/items';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  @Input() public userFoodItem: UserFoodItem;
}
