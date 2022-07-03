import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  reversestring: string = '';
  value: any;
  transform(value: any, ...args: unknown[]): any {
    console.log(value);
    this.reversestring=value.split('').reverse().join('');

    return this.reversestring;
  }

}
