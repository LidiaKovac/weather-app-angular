import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'convertDt'
})
export class ConvertDtPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return moment.unix(value).format("ddd, DD/MM")
  }

}
