import { Injectable } from '@angular/core';
import { ProductService } from '../product/product-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any;
  constructor(private productService: ProductService) {
    this.cartList = [];
  }

  addProductToCart(product: any): boolean {
    if (this.productService.isProductAvailable(product)) {
      this.cartList.push(product);
      return true;
    } else {
      return false;
    }
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
