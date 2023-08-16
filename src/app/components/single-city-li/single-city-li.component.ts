import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FavsService } from 'src/app/services/favs.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-single-city-li',
  templateUrl: './single-city-li.component.html',
  styleUrls: ['./single-city-li.component.scss']
})
export class SingleCityLiComponent  {
  @Input() city!: string
  favs!: string[]

  constructor(private favSrv: FavsService, private api: ApiService) {
    this.favSrv.favs.subscribe(res => this.favs = res)

  }

  loadCity(city: string) {
    this.api.loadWeather(city).subscribe()
  }
  addFavs(city: string) {
    this.favSrv.addFav(city).subscribe()
  }
  removeFavs(city: string) {
    this.favSrv.removeFav(city).subscribe()
  }

}
