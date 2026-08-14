import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizV2 } from './quiz-v2';

describe('QuizV2', () => {
  let component: QuizV2;
  let fixture: ComponentFixture<QuizV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizV2],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
