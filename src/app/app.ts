import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Traffic } from './traffic/traffic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Traffic],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
