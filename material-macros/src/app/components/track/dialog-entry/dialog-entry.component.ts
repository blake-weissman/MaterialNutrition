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
    protected dialogParams: {
      0: ComponentType<any> | TemplateRef<any>;
      1?: MatDialogConfig<any>;
    },
    protected exitRouteParams: {
      0: any[], 
      1?: NavigationExtras
    },
  ) {
    const dialog = injector.get(MatDialog).open(dialogParams[0], dialogParams[1]);
    this.redirectWhenClosedSubscription = dialog.afterClosed().subscribe(() => {
      injector.get(Router).navigate(exitRouteParams[0], exitRouteParams[1]);
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}
