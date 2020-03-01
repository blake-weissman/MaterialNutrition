import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserItemComponent } from './create-user-item.component';

describe('CreateItemComponent', () => {
  let component: CreateUserItemComponent;
  let fixture: ComponentFixture<CreateUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
