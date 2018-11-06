import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcatComponent } from './fetchcat.component';

describe('FetchcatComponent', () => {
  let component: FetchcatComponent;
  let fixture: ComponentFixture<FetchcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
