import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatsComponent } from './item-stats.component';

describe('ItemStatsComponent', () => {
  let component: ItemStatsComponent;
  let fixture: ComponentFixture<ItemStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
