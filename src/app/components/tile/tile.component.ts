import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { List, Weather } from 'src/app/interfaces/weather/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  offset!: number
  weather!: List
  city!:string
  constructor(private weatherSrv: WeatherService) {
    this.weatherSrv.weatherData.pipe(map((weather) => {
      if (weather && weather.list) {
        return [weather.list[0], weather.city.name ]
      } else return [weather?.list, weather?.city.name]
    })).subscribe((data) => {
      this.weather = data[0] as List
      this.city = this.weatherSrv.city || data[1] as string
    })
  }


  ngOnInit(): void {
  }

}
