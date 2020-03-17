import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDisplayComponent } from './goals-display.component';

describe('GoalsDisplayComponent', () => {
  let component: GoalsDisplayComponent;
  let fixture: ComponentFixture<GoalsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
