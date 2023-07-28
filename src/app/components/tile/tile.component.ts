import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  weather!: Weather
  constructor(private weatherSrv: WeatherService) {
    this.weatherSrv.weatherData.subscribe((data: Weather) => {
      this.weather = data
    })
  }

  ngOnInit(): void {
  }

}
