import { Component } from '@angular/core';
import { ErrorType, WeatherInterface } from 'src/app/types/weatherType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  weatherData: WeatherInterface | undefined;
  errorData: ErrorType | undefined;

  setWeatherData = (data: WeatherInterface) => {
    this.weatherData = data
  }

  handleErrorinSearch = (error: ErrorType) => {
    this.errorData = error
  }
}
