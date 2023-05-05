import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList = [
    { id: 1, name: 'Product1', price: 1000 },
    { id: 2, name: 'Product 2', price: 3000 },
  ];

  constructor() {}

  isProductAvailable(product: any): boolean {
    return product.name ? true : false;
  }

  isProductQuantityAvailable(product: any): boolean {
    return product.name ? true : false;
  }

  getProductPrice(product: any): number {
    if (product.price) {
      return product.price;
    } else {
      return 0;
    }
  }
}
