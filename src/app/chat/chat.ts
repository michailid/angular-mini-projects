import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  messages: string[] = [];
  currentMessage = signal('');

  sendMessage() {
    if (this.currentMessage().trim() != '') {
      this.messages.push(this.currentMessage());
      this.currentMessage.set('');
    }
  }
}
