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

  removeProductFromCart(product: any): boolean {
    this.cartList.filter((item: any) => item.id !== 2);
    return true;
  }

  updateQuantityOfCartProduct(product: any): boolean {
    if (this.productService.isProductQuantityAvailable(product)) {
      return true;
    } else {
      return false;
    }
  }

  getCartTotal(): number {
    return 10;
  }
}
