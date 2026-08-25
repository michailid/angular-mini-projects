import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DigitalClock } from './digital-clock/digital-clock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DigitalClock],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
