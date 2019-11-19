import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultPage } from './difficult.page';

describe('DifficultPage', () => {
  let component: DifficultPage;
  let fixture: ComponentFixture<DifficultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
