import { Component, OnInit, OnDestroy, ComponentRef, AfterContentChecked, Injectable, Injector, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import { GoalsDialogComponent } from '../goals-dialog/goals-dialog.component';
import { AddLogItemDialogComponent } from '../add-log-item-dialog/add-log-item-dialog.component';

export abstract class DialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    protected injector: Injector,
    protected dialogComponent: ComponentType<any> | TemplateRef<any>,
    protected exitRoute: string,
  ) {
    const dialog = injector.get(MatDialog).open(dialogComponent);
    this.redirectWhenClosedSubscription = dialog.afterClosed().subscribe(() => {
      injector.get(Router).navigate([exitRoute]);
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
