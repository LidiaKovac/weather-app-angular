import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather/weather.interface';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather$ = new BehaviorSubject<Weather | null>(null)
  weatherData = this.weather$.asObservable()
  private _city: string = 'genoa';

  constructor() { }

  // set weather(val: Weather) {
  //   this.weather$.next(val)
  // }



  set city(val: string) {
    this._city = val;
  }

  get city() {
    return this._city;
  }
}
