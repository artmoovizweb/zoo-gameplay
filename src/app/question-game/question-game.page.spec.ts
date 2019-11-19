import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGamePage } from './question-game.page';

describe('QuestionGamePage', () => {
  let component: QuestionGamePage;
  let fixture: ComponentFixture<QuestionGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
