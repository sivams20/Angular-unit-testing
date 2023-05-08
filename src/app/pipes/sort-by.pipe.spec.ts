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
});
