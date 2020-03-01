import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemsDialogComponent } from './user-items-dialog.component';
describe('ItemsDialogComponent', () => {
  let component: UserItemsDialogComponent;
  let fixture: ComponentFixture<UserItemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
