import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemsTableComponent } from './log-items-table.component';

describe('LogItemsTableComponent', () => {
  let component: LogItemsTableComponent;
  let fixture: ComponentFixture<LogItemsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogItemsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
