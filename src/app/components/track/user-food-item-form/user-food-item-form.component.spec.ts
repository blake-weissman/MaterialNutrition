import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFoodItemFormComponent } from './user-food-item-form.component';

describe('ItemFormComponent', () => {
  let component: UserFoodItemFormComponent;
  let fixture: ComponentFixture<UserFoodItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFoodItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFoodItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
