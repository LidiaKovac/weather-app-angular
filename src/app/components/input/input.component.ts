import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  city!: string
  constructor(private api: ApiService, private weatherSrv: WeatherService) { }

  ngOnInit(): void {
    this.city = this.weatherSrv.city
  }
  search() {
    this.api.loadWeather(this.city).subscribe()
  }

}
