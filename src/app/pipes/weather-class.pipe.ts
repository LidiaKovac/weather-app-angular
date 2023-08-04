import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherClass'
})
export class WeatherClassPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 600 || (value >= 700 && value < 800)) return `weather__box weather--rain`
    if (value >= 600 && value < 700) return `weather__box weather--snow`
    if (value === 800) return `weather__box weather--sun`
    if (value > 800) return `weather__box weather--rain`
    return ""
  }

}
