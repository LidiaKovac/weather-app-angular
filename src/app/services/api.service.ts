import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/weather/city.interface';
import { Weather } from '../interfaces/weather/weather.interface';
import { mergeMap, map } from 'rxjs';
import { WeatherService } from './weather.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _lat!: number;
  _lon!: number;

  //api
  private key: string = environment.API_KEY;
  url: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${this._lat}&lon=${this._lon}&appid=${this.key}&units=metric`;
  coordsAPI: string = `http://api.openweathermap.org/geo/1.0/direct?q=${this.weatherSrv.city}&limit=1&appid=${this.key}`;
  constructor(private http: HttpClient, private weatherSrv: WeatherService) {
    //Vogliamo caricare una citta' di default al caricamento dell'app
    this.loadWeather()
  }

  private setUrl() {
    this.url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this._lat}&lon=${this._lon}&appid=${this.key}&units=metric`;
  }

  private setCoordsUrl() {
    this.coordsAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${this.weatherSrv.city}&limit=1&appid=${this.key}`;
  }

  private set lat(val: number) {
    this._lat = val;
  }

  private set lon(val: number) {
    this._lon = val;
  }


  private getCity() {
    return this.http.get<City[]>(this.coordsAPI);
  }

  private getWeather() {
    return this.http.get<Weather>(this.url);
  }

  loadWeather(cityName: string = this.weatherSrv.city) {
    this.weatherSrv.city = cityName
    this.setCoordsUrl()
    this.getCity().subscribe((cities: City[]) => {
      console.log(cities);
      this.lat = cities[0].lat;
      this.lon = cities[0].lon;
      this.weatherSrv.city = cities[0].local_names['it'];
      //una volta caricata la citta', ricreiamo l'url
      this.setUrl();
      this.getWeather().subscribe((weather: Weather) => {
        this.weatherSrv.weather = weather
      });
    });

  }
}
