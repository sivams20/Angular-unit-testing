import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-service.service';
import { ProductService } from '../product/product-service.service';

describe('CartService', () => {
  let service: CartService;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ProductService', [
      'isProductAvailable',
      'isProductQuantityAvailable',
      'getProductPrice',
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: ProductService, useValue: spy }],
    });
    service = TestBed.inject(CartService);
    productServiceSpy = TestBed.inject(
      ProductService
    ) as jasmine.SpyObj<ProductService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check addProductToCart with true value', () => {
    productServiceSpy.isProductAvailable.and.returnValue(true);
    expect(service.addProductToCart({ name: 'Product1', price: 1000 })).toBe(
      true
    );
  });

  it('should check addProductToCart with false value', () => {
    productServiceSpy.isProductAvailable.and.returnValue(false);
    expect(service.addProductToCart({ name: 'Product1', price: 1000 })).toBe(
      false
    );
  });

  it('should check updateQuantityOfCartProduct with true value', () => {
    productServiceSpy.isProductQuantityAvailable.and.returnValue(true);
    expect(
      service.updateQuantityOfCartProduct({ name: 'Product1', price: 1000 })
    ).toBe(true);
  });

  it('should check updateQuantityOfCartProduct with false value', () => {
    productServiceSpy.isProductAvailable.and.returnValue(false);
    expect(
      service.updateQuantityOfCartProduct({ name: 'Product1', price: 1000 })
    ).toBe(false);
  });

  it('should check cart should be empty initially', () => {
    expect(service.cartList.length).toBe(0);
  });

  it('should check cart should be updated', () => {
    productServiceSpy.isProductAvailable.and.returnValue(true);
    service.addProductToCart({ name: 'Product1', price: 1000 });
    expect(service.cartList.length).toBe(1);
  });
});
