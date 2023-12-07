import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherInterface } from 'src/app/types/weatherType';
import { readableTime } from './../../utils/common'


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
    this.weatherData = changes['weatherData']['currentValue'];
  }
}
