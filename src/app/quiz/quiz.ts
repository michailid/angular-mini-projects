import { Component } from '@angular/core';
import { Question } from '../model/quiz.model';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  questions: Question[] = [
    {
      question: 'Tailwind is?',
      options: ['Framework', 'Library', 'Utility CSS'],
      correctAnswerIndex: 0,
    },
    {
      question: 'What is int in Java?',
      options: ['Boolean', 'Float', 'Integer'],
      correctAnswerIndex: 2,
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
