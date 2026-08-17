import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VotingApp } from './voting-app/voting-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VotingApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
