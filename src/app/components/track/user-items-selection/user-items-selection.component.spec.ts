import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemsSelectionComponent } from './user-items-selection.component';

describe('UserItemsSelectionComponent', () => {
  let component: UserItemsSelectionComponent;
  let fixture: ComponentFixture<UserItemsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
