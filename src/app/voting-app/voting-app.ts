import { Component, inject, signal } from '@angular/core';
import { Option } from '../model/voting.model';
import { PollStore } from '../stores/poll.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voting-app',
  imports: [FormsModule],
  templateUrl: './voting-app.html',
  styleUrl: './voting-app.css',
})
export class VotingApp {
  newOption = '';

  store = inject(PollStore);

  addOption() {
    if (!this.newOption.trim()) return;
    this.store.addOption(this.newOption);
    this.newOption = '';
  }

  getPercentage(votes: number) {
    const total = this.store.totalVotes();
    return total ? (votes / total) * 100 : 0;
  }
}
