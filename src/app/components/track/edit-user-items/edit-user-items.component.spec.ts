import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditUserItemsComponent } from './edit-user-items.component';

describe('EditItemComponent', () => {
  let component: EditUserItemsComponent;
  let fixture: ComponentFixture<EditUserItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
