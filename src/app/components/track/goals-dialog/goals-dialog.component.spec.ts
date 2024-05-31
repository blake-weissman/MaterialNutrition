import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDialogComponent } from './goals-dialog.component';

describe('GoalsDialogComponent', () => {
  let component: GoalsDialogComponent;
  let fixture: ComponentFixture<GoalsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
