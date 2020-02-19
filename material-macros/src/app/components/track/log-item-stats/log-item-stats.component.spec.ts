import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogItemStatsComponent } from './log-item-stats.component';

describe('LogItemStatsComponent', () => {
  let component: LogItemStatsComponent;
  let fixture: ComponentFixture<LogItemStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogItemStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
