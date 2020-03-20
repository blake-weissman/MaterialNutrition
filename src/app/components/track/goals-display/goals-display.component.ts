import { Component, OnInit, Input } from '@angular/core';
import { macroKeys, NutritionData, NutritionDataKeys } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-goals-display',
  templateUrl: './goals-display.component.html',
  styleUrls: ['./goals-display.component.scss']
})
export class GoalsDisplayComponent {
  @Input() public nutritionData: NutritionData;

  public macroKeys = macroKeys;
  public NutritionDataKeys = NutritionDataKeys;

  constructor(public userService: UserService) {}
}
