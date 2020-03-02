import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogItemDialogComponent } from './add-log-item-dialog.component';

describe('AddLogItemDialogComponent', () => {
  let component: AddLogItemDialogComponent;
  let fixture: ComponentFixture<AddLogItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
