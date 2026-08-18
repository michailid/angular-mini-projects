import { Component, signal } from '@angular/core';
import { Option } from '../model/voting.model';

@Component({
  selector: 'app-voting-app',
  imports: [],
  templateUrl: './voting-app.html',
  styleUrl: './voting-app.css',
})
export class VotingApp {
  options = signal<Option[]>([]);

  addOption(option: string) {
    if (option == '') return;
    this.options.update((list) => [...list, { option: option, votes: 0 }]);
    console.log(this.options());
  }

  upVote(index: number) {}
}
