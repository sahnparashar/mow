import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrestaurentComponent } from './loginrestaurent.component';

describe('LoginrestaurentComponent', () => {
  let component: LoginrestaurentComponent;
  let fixture: ComponentFixture<LoginrestaurentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrestaurentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
