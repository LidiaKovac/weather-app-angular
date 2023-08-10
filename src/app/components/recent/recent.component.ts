import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FavsService } from 'src/app/services/favs.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {
  recent!: string[]
  favs!: string[]
  constructor(private weatherSrv: WeatherService, private favSrv: FavsService, private api: ApiService) {
    this.weatherSrv.recentCities$.asObservable()
      .subscribe((cities) => this.recent = cities)
    this.favSrv.favs.subscribe(res => this.favs = res)
    }

    loadCity(city:string) {
      this.api.loadWeather(city).subscribe()
    }
  addFavs(city:string) {
    this.favSrv.addFav(city).subscribe()
  }
  removeFavs(city:string) {
    this.favSrv.removeFav(city).subscribe()
  }
}
