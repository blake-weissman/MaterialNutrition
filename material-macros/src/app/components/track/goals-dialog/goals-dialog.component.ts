import { Component, OnDestroy, Injector, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NutritionData, NutritionDataKeys, macroKeys } from 'src/app/model/items';
import { UserService } from 'src/app/services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogEntryComponent } from '../dialog-entry/dialog-entry.component';

@Component({
  selector: 'app-goals-dialog',
  templateUrl: './goals-dialog.component.html',
  styleUrls: ['./goals-dialog.component.scss']
})
export class GoalsDialogComponent {
  public currentUserGoals: NutritionData = this.appService.deepCopy(this.userService.user.goals);
  public NutritionDataKeys = NutritionDataKeys;
  public Math = Math;
  public macroKeys = macroKeys;

  constructor(
    public userService: UserService,
    private appService: AppService,
    private matSnackBar: MatSnackBar
  ) {}

  public saveGoals(): void {
    this.userService.getUserFirestoreDocument().update(this.appService.convertCustomObjectToObject({
      goals: this.currentUserGoals
    })).then(() => {
      this.matSnackBar.open('Your goals were successfully saved.', 'Dismiss', {
        duration: 5000,
      })
    });
  }
}

@Component({
  template: '',
})
export class GoalsDialogEntryComponent extends DialogEntryComponent {
  constructor(
    protected injector: Injector
  ) {
    super(injector, [GoalsDialogComponent], [['../']]);
  }
}