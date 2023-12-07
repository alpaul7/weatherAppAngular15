import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherInterface } from 'src/app/types/weatherType';
import { readableTime } from './../../utils/common'


const dummyData = {
  "location": {
    "name": "Toronto",
    "region": "Ontario",
    "country": "Canada",
    "lat": 43.67,
    "lon": -79.42,
    "tz_id": "America/Toronto",
    "localtime_epoch": 1701917057,
    "localtime": "2023-12-06 21:44"
  },
  "current": {
    "last_updated_epoch": 1701916200,
    "last_updated": "2023-12-06 21:30",
    "temp_c": -1,
    "temp_f": 30.2,
    "is_day": 0,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
      "code": 1009
    },
    "wind_mph": 3.8,
    "wind_kph": 6.1,
    "wind_degree": 270,
    "wind_dir": "W",
    "pressure_mb": 1020,
    "pressure_in": 30.12,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 64,
    "cloud": 100,
    "feelslike_c": -2.4,
    "feelslike_f": 27.7,
    "vis_km": 14,
    "vis_miles": 8,
    "uv": 1,
    "gust_mph": 3.8,
    "gust_kph": 6.1
  }
}

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css']
})
export class WeatherBoxComponent implements OnChanges {

  @Input() weatherData: WeatherInterface | undefined = undefined;


  isDay: boolean = true;
  readableTime = readableTime

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.weatherData = dummyData
  }
}
