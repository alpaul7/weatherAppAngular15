import { Component } from '@angular/core';
import { WeatherService } from './../../services/weather.service'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  cityName: string = '';

  constructor(private weatherService: WeatherService) { }

  handleCitySelection = () => {
    this.weatherService.getWeatherData(this.cityName).subscribe((resp: any) => {
      console.log(resp)
    })
  }
}
