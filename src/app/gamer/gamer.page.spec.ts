import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerPage } from './gamer.page';

describe('GamerPage', () => {
  let component: GamerPage;
  let fixture: ComponentFixture<GamerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
