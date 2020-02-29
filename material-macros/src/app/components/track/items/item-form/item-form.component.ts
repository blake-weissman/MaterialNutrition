import { Component, OnInit } from '@angular/core';
import { UserFoodItem } from 'src/app/model/items';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  public userFoodItem: UserFoodItem = new UserFoodItem(); 
}
