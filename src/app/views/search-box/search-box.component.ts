import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from './../../services/weather.service'
import { ErrorType, WeatherInterface } from 'src/app/types/weatherType';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output() weatherData = new EventEmitter<WeatherInterface>()
  @Output() onError = new EventEmitter<ErrorType>()

  cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  handleCitySelection = () => {
    this.weatherService.getWeatherData(this.cityName)
      .subscribe(
        {
          next: (resp: WeatherInterface) => {
            this.weatherData.emit(resp)
          },
          error: (e) => {
            this.onError.emit(e.error.error)
            this.weatherData.emit(undefined)
          }
        }
      )
  }
}
