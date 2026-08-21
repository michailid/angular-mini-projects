import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartSystem } from './cart-system/cart-system';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartSystem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('10-mini-projects');
}
