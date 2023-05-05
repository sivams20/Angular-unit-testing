import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}

  addProductToCart(): boolean {
    return true;
  }

  removeProductFromCart(): boolean {
    return true;
  }

  updateQuantityOfCartProduct(): boolean {
    return true;
  }

  getCartTotal(): number {
    return 10;
  }
}
