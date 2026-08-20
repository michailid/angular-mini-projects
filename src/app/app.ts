import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notes } from './notes/notes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
