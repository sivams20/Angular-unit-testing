import { TestBed } from '@angular/core/testing';
import { ProductService } from './product-service.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if the product is available', () => {
    const product = { name: 'Product1', price: 1000 };
    service.isProductAvailable(product);
    expect(service.isProductAvailable(product)).toBe(true);
  });

  it('should check if the product is not available', () => {
    const product = {};
    service.isProductAvailable(product);
    expect(service.isProductAvailable(product)).toBe(false);
  });

  it('should check if the quantity is available', () => {
    const product = { name: 'Product1', price: 1000 };
    service.isProductQuantityAvailable(product);
    expect(service.isProductQuantityAvailable(product)).toBe(true);
  });

  it('should check if the quantity is not available', () => {
    const product = {};
    service.isProductQuantityAvailable(product);
    expect(service.isProductQuantityAvailable(product)).toBe(false);
  });

  it('should check if the getProductPrice is available', () => {
    const product = { name: 'Product1', price: 1000 };
    service.getProductPrice(product);
    expect(service.getProductPrice(product)).toBe(1000);
  });

  it('should check if the getProductPrice is not available', () => {
    const product = {};
    service.getProductPrice(product);
    expect(service.getProductPrice(product)).toBe(0);
  });
});
