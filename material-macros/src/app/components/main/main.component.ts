import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsService, Meal } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private dateSubscription: Subscription;
  public selectedDate = new Date();
  public selectedEpoch: string;
  // public meals: Meal[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public itemsService: ItemsService,
  ) {}

  ngOnInit() {
    this.dateSubscription = this.activatedRoute.params.subscribe(params => {
      this.selectedEpoch = params.date;
      this.selectedDate = new Date(Number(this.selectedEpoch));
      // this.meals = this.itemsService.datesTracked[date];
    });
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }

  onDateSelect(date: Date): void {
    this.router.navigateByUrl('/' + date.getTime());
  } 

  // public drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.meals, event.previousIndex, event.currentIndex);
  //   this.meals = [...this.meals];
  // }
}

@Component({
  template: '',
})
export class AddItemDialogEntryComponent implements OnDestroy {
  private redirectWhenClosedSubscription: Subscription;

  constructor(
    public matDialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    const addItemDialog = this.matDialog.open(AddItemDialogComponent, {
      width: '700px'
    });
    this.redirectWhenClosedSubscription = addItemDialog.afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.redirectWhenClosedSubscription.unsubscribe();
  }
}

@Component({
  selector: 'add-item-dialog',
  templateUrl: 'add-item-dialog.html',
  styleUrls: ['./add-item-dialog.scss']
})
export class AddItemDialogComponent {}