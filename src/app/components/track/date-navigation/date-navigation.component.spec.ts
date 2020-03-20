import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNavigationComponent } from './date-navigation.component';

describe('DateNavigationComponent', () => {
  let component: DateNavigationComponent;
  let fixture: ComponentFixture<DateNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
