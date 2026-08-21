import { Component, signal } from '@angular/core';
import { Product } from '../model/cart.model';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-cart-system',
  imports: [],
  templateUrl: './cart-system.html',
  styleUrl: './cart-system.css',
})
export class CartSystem {
  private readonly STORAGE_KEY = 'cart';

  products = signal<Product[]>([
    {
      id: 1,
      name: 'Shirt',
      price: 15,
    },
    {
      id: 2,
      name: 'Shoes',
      price: 50,
    },
    {
      id: 3,
      name: 'Watch',
      price: 30,
    },
  ]);

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update((list) => [...list, product]);
  }

  removeFromCart(index: number) {
    this.cart.update((list) => list.filter((_, i) => i !== index));
  }

  totalPrice() {
    return this.cart().reduce((total, product) => total + product.price, 0);
  }
}
