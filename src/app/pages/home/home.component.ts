import { Component, OnInit } from '@angular/core';
import { FavsService } from 'src/app/services/favs.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recent!: string[]
  favs!: string[]

  constructor(private weatherSrv: WeatherService, private favSrv: FavsService) {
    this.weatherSrv.recentCities$.asObservable()
      .subscribe((cities) => this.recent = cities)
    this.favSrv.favs.subscribe(res => this.favs = res)

  }

  ngOnInit(): void {
  }

}
