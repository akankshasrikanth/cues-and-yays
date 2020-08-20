import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcq1Component } from './mcq1.component';

describe('Mcq1Component', () => {
  let component: Mcq1Component;
  let fixture: ComponentFixture<Mcq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mcq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mcq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
