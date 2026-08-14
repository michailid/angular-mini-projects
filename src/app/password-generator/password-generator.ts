import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  imports: [],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  password = signal('');

  generatePassword() {
    this.password.set('');
    for (let i = 0; i < 12; i++) {
      const c = this.getRandomChar();
      this.password.update((p) => p + c);
    }
  }

  getRandomChar(): string {
    const min = 33;
    const max = 126;
    const asciiCode = Math.floor(Math.random() * (max - min + 1)) + min;
    return String.fromCharCode(asciiCode);
  }
}
