import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchrestComponent } from './fetchrest.component';

describe('FetchrestComponent', () => {
  let component: FetchrestComponent;
  let fixture: ComponentFixture<FetchrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
