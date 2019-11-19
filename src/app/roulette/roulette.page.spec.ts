import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoulettePage } from './roulette.page';

describe('RoulettePage', () => {
  let component: RoulettePage;
  let fixture: ComponentFixture<RoulettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoulettePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoulettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
