import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from './../../services/weather.service'
import { WeatherInterface } from 'src/app/types/weatherType';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output() weatherData = new EventEmitter<WeatherInterface>()

  cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  handleCitySelection = () => {
    this.weatherService.getWeatherData(this.cityName)
      .subscribe((resp: WeatherInterface) => {
        console.log(resp)
        this.weatherData.emit(resp)
      })
  }
}
