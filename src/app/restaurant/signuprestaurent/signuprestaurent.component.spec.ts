import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuprestaurentComponent } from './signuprestaurent.component';

describe('SignuprestaurentComponent', () => {
  let component: SignuprestaurentComponent;
  let fixture: ComponentFixture<SignuprestaurentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuprestaurentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuprestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
