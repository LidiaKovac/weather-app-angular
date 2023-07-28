import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTemp'
})
export class RoundTempPipe implements PipeTransform {

  transform(value: number): unknown {
    return ~~value
  }

}
