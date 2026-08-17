import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Github } from './github/github';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Github],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
