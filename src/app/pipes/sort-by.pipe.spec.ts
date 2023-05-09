import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });

  it('sort array in asc order by name', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 1, name: 'Laptop', price: 19000 },
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'asc', 'name')).toEqual(outputArray);
  });

  it('sort array in desc order by name', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 5, name: 'Printer', price: 1200 },
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'desc', 'name')).toEqual(outputArray);
  });

  // it('sort array in asc order by id by default', () => {
  //   const inputArray = [
  //     { id: 3, name: 'Mobile', price: 1000 },
  //     { id: 5, name: 'Printer', price: 1200 },
  //     { id: 1, name: 'Laptop', price: 19000 },
  //   ];
  //   const outputArray = [
  //     { id: 1, name: 'Laptop', price: 19000 },
  //     { id: 3, name: 'Mobile', price: 1000 },
  //     { id: 5, name: 'Printer', price: 1200 },
  //   ];
  //   const pipe = new SortByPipe();
  //   expect(pipe.transform(inputArray, 'asc', '')).toEqual(outputArray);
  // });

  it('sort array in asc order by id', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 1, name: 'Laptop', price: 19000 },
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'asc', 'id')).toEqual(outputArray);
  });

  it('sort array in desc order by id', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 5, name: 'Printer', price: 1200 },
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'desc', 'id')).toEqual(outputArray);
  });

  it('sort array in asc order by price', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'asc', 'price')).toEqual(outputArray);
  });

  it('sort array in desc order by price', () => {
    const inputArray = [
      { id: 3, name: 'Mobile', price: 1000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 1, name: 'Laptop', price: 19000 },
    ];
    const outputArray = [
      { id: 1, name: 'Laptop', price: 19000 },
      { id: 5, name: 'Printer', price: 1200 },
      { id: 3, name: 'Mobile', price: 1000 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'desc', 'price')).toEqual(outputArray);
  });
});
