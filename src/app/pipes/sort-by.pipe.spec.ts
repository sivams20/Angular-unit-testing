import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms array in ascending order', () => {
    const pipe = new SortByPipe();
    expect(pipe.transform([1, 5, 4, 3, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it('transforms array in descending order', () => {
    const pipe = new SortByPipe();
    expect(pipe.transform([1, 5, 4, 3, 2], 'desc')).toEqual([5, 4, 3, 2, 1]);
  });

  it('sort array in asc order by name', () => {
    const inputArray = [
      { name: 'Z', sex: 'F', age: 18 },
      { name: 'A', sex: 'F', age: 12 },
      { name: 'H', sex: 'M', age: 19 },
    ];
    const outputArray = [
      { name: 'A', sex: 'F', age: 12 },
      { name: 'H', sex: 'M', age: 19 },
      { name: 'Z', sex: 'F', age: 18 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'asc', 'name')).toEqual(outputArray);
  });

  it('sort array in asc order by id', () => {
    const inputArray = [
      { name: 'Z', sex: 'F', age: 18 },
      { name: 'A', sex: 'F', age: 12 },
      { name: 'H', sex: 'M', age: 19 },
    ];
    const outputArray = [
      { name: 'A', sex: 'F', age: 12 },
      { name: 'Z', sex: 'F', age: 18 },
      { name: 'H', sex: 'M', age: 19 },
    ];
    const pipe = new SortByPipe();
    expect(pipe.transform(inputArray, 'asc', 'age')).toEqual(outputArray);
  });
});
