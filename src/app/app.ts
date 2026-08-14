import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz } from './quiz/quiz';
import { QuizV2 } from './quiz-v2/quiz-v2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizV2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
