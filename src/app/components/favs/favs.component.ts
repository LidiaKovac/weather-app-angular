import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FavsService } from 'src/app/services/favs.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent {

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
