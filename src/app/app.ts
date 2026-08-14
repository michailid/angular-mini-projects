import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatV2 } from './chat-v2/chat-v2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatV2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
