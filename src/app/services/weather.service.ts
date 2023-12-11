import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { weatherUrl } from '../constants/apiUrls';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  httpHeaders = {
    'X-RapidAPI-Key': '122bc3224cmsh80524ccc82e09abp149906jsn1b26828afb37',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }

  getWeatherData(cityName: string): Observable<any> {
    const url = `${weatherUrl}`
    return this.http.get(url, {
      headers: this.httpHeaders,
      params: { q: cityName }
    })
  }
}
