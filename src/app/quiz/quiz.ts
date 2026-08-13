import { Component } from '@angular/core';
import { Question } from '../model/quiz.model';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';

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

  onSelectOption(index: number) {
    if (index == this.questions[this.currentQuestionIndex].correctAnswerIndex) {
      this.score += 1;
    }
  }

  goToNextQuestion() {
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

  // isOptionSelected(optionIndex: number) {
  //   if (this.questions[this.currentQuestionIndex].options[optionIndex])
  // }
}
