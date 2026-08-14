import { Component } from '@angular/core';
import { Question } from '../model/quiz.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [NgClass],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  questions: Question[] = [
    {
      question: 'Tailwind is?',
      options: ['Framework', 'Library', 'Utility CSS'],
      correctAnswerIndex: 2,
    },
    {
      question: 'What is int in Java?',
      options: ['Integer', 'Float', 'Boolean'],
      correctAnswerIndex: 0,
    },
  ];

  currentQuestionIndex: number = 0;
  endOfQuiz = false;
  score = 0;
  selectedOptionIndex: number | null = null;

  /**
   *
   * @param index the index of the the selected option
   */
  onSelectOption(index: number) {
    this.selectedOptionIndex = index;
  }

  computeScore() {
    if (this.selectedOptionIndex == this.questions[this.currentQuestionIndex].correctAnswerIndex) {
      this.score += 1;
    }
  }

  goToNextQuestion() {
    this.computeScore();
    this.selectedOptionIndex = null;
    if (this.currentQuestionIndex == this.questions.length - 1) {
      this.endOfQuiz = true;
    } else {
      this.currentQuestionIndex++;
    }
  }

  restart() {
    this.currentQuestionIndex = 0;
    this.endOfQuiz = false;
    this.score = 0;
  }
}
