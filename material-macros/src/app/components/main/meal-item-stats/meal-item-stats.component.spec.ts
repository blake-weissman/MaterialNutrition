import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealItemStatsComponent } from './meal-item-stats.component';

describe('MealItemStatsComponent', () => {
  let component: MealItemStatsComponent;
  let fixture: ComponentFixture<MealItemStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealItemStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealItemStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
