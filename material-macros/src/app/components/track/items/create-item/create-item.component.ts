import { Component, OnInit } from '@angular/core';
import { UserFoodItem } from 'src/app/model/items';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  public userFoodItem: UserFoodItem = new UserFoodItem(); 
}
