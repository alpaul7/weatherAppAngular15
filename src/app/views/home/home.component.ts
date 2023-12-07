import { Component } from '@angular/core';
import { WeatherInterface } from 'src/app/types/weatherType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  weatherData: WeatherInterface | undefined;

  setWeatherData = (data: WeatherInterface) => {
    this.weatherData = data
  }
}
