import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck'
})
export class PluckPipe implements PipeTransform {

  transform(value: any, key: string): any {
    return value == null ? undefined : value[key];
  }

}