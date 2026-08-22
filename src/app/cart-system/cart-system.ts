import { Component, computed, effect, signal } from '@angular/core';
import { Product } from '../model/cart.model';

@Component({
  selector: 'app-cart-system',
  imports: [],
  templateUrl: './cart-system.html',
  styleUrl: './cart-system.css',
})
export class CartSystem {
  private readonly STORAGE_KEY = 'cart_data';

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart()));
    });
  }

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
    {
      id: 4,
      name: 'A product with a very long name, a product with a very long name, a product with a very long name, a product with a very long name, a product with a very long name',
      price: 30,
    },
  ]);

  cart = signal<Product[]>(this.loadCart());
  totalPrice = computed(() => this.cart().reduce((total, product) => total + product.price, 0));

  addToCart(product: Product) {
    this.cart.update((list) => [...list, product]);
  }

  removeFromCart(index: number) {
    this.cart.update((list) => list.filter((_, i) => i !== index));
  }

  loadCart() {
    if (typeof localStorage === 'undefined') return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
