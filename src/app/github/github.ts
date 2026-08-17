import { Component, signal } from '@angular/core';
import { sign } from 'node:crypto';

@Component({
  selector: 'app-github',
  imports: [],
  templateUrl: './github.html',
  styleUrl: './github.css',
})
export class Github {
  private base_url = 'https://api.github.com/users';
  query = signal('');
  user = signal<any>(null);
  loading = signal(false);
  error = signal('');

  searchUser() {
    if (!this.query()) return;
    this.loading.set(true);
    this.error.set('');
    this.user.set(null);

    fetch(this.base_url + `/${this.query()}`)
      .then((res) => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then((data) => {
        this.user.set(data);
        this.loading.set(false);
      })
      .catch((err) => {
        this.error.set(err.message);
        this.loading.set(false);
      });
  }

  openProfile() {
    if (this.user()) {
      window.open(this.user().html_url, '_blank');
    }
  }
}
