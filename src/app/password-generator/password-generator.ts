import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  imports: [],
  templateUrl: './password-generator.html',
  styleUrl: './password-generator.css',
})
export class PasswordGenerator {
  password = signal('');
  readonly CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*-_?<>';

  generatePassword() {
    let pwd = '';
    for (let i = 0; i < 12; i++) {
      pwd += this.getRandomChar();
    }
    this.password.set(pwd);
  }

  getRandomChar(): string {
    return this.CHARS[Math.floor(Math.random() * this.CHARS.length)];
  }
}
