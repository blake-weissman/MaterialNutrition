import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDialogComponent } from './items-dialog.component';

describe('ItemsDialogComponent', () => {
  let component: ItemsDialogComponent;
  let fixture: ComponentFixture<ItemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
