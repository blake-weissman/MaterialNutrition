import { Component, OnInit, OnDestroy, ComponentRef, AfterContentChecked, Injectable, Injector, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import { GoalsDialogComponent } from '../goals-dialog/goals-dialog.component';
import { AddLogItemDialogComponent } from '../add-log-item-dialog/add-log-item-dialog.component';

export abstract class DialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    protected injector: Injector,
    protected dialogParams: [ComponentType<any> | TemplateRef<any>, MatDialogConfig<any>],
    protected exitRouteParams: [any[], NavigationExtras],
  ) {
    const dialog = injector.get(MatDialog).open.apply(dialogParams);
    this.redirectWhenClosedSubscription = dialog.afterClosed().subscribe(() => {
      injector.get(Router).navigate.apply(exitRouteParams);
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
