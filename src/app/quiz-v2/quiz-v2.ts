import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quiz-v2',
  imports: [],
  templateUrl: './quiz-v2.html',
  styleUrl: './quiz-v2.css',
})
export class QuizV2 {
  questions = [
    {
      question: 'Angular is developed by?',
      options: ['Google', 'Facebook', 'Microsoft'],
      answer: 'Google',
    },
    {
      question: 'Signals replace with?',
      options: ['RxJs', 'HTML', 'CSS'],
      answer: 'RxJs',
    },
    {
      question: 'Tailwind CSS is?',
      options: ['Framework', 'Library', 'Utility CSS'],
      answer: 'Utility CSS',
    },
  ];

  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false);

  currentQuestion = () => this.questions[this.currentIndex()];

  answer(option: string) {
    if (option === this.currentQuestion().answer) {
      this.score.update((s) => s + 1);
    }
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update((i) => i + 1);
    } else {
      this.finished.set(true);
    }
  }

  restart() {
    this.currentIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
  }
}
