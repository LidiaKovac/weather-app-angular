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
  private recentCitiesSet: Set<string> = new Set()
  recentCities$ = new BehaviorSubject<string[]>([])
  constructor() {
    const ls = JSON.parse(localStorage.getItem("weather-recent")!)
    if (ls) {
      this.recentCitiesSet = new Set(ls)
      this.recentCities$.next(ls)
    }
  }




  set city(val: string) {
    this._city = val;
    this.recentCitiesSet.add(val)
    this.recentCities$.next(Array.from(this.recentCitiesSet))
    this.updateRecent()

  }

  get city() {
    return this._city;
  }

  updateRecent() {
    this.recentCities$.next(Array.from(this.recentCitiesSet))
    localStorage.setItem("weather-recent", JSON.stringify(Array.from(this.recentCitiesSet)))
  }
}
