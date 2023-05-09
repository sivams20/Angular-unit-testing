import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: any[], order = 'asc', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    } // sort 1d array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    //return orderBy(value, [column], [order]);
    if (value.length && column !== '') {
      let numberArray = [];
      let stringArray = [];
      numberArray = value
        .filter((item) => typeof item[column] === 'number')
        .sort((a, b) => a[column] - b[column]);
      stringArray = value
        .filter((item) => typeof item[column] === 'string')
        .sort((a, b) => {
          if (a[column] < b[column]) return -1;
          else if (a[column] > b[column]) return 1;
          else return 0;
        });
      const sorted = numberArray.concat(stringArray);
      return order === 'asc' ? sorted : sorted.reverse();
    }
    return value;
  }
}
