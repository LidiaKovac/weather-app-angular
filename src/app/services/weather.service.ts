import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather/weather.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather$ = new BehaviorSubject({} as Weather)
  weatherData = this.weather$.asObservable()
  _city: string = 'genoa';

  constructor() { }

  set weather(val: Weather) {
    this.weather$.next(val)
  }

  set city(val: string) {
    this._city = val;
  }

  get city() {
    return this._city;
  }
}
