import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-chat-v2',
  imports: [],
  templateUrl: './chat-v2.html',
  styleUrl: './chat-v2.css',
})
export class ChatV2 {
  messages = signal<string[]>([]);

  sendMessage(msg: string) {
    if (msg.trim()) {
      this.messages.update((list) => [...list, msg]);
    }
  }
}
