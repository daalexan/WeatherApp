import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { CityWeather } from '../models/city-weather.model';

import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {

  public weatherTrigger$: Observable<string> = undefined;
  public weatherTrigger: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {
    this.weatherTrigger$ = this.weatherTrigger.asObservable();
  }

  triggerChanged(cityName: string) {
    this.weatherTrigger.next(cityName);
  }

  public getWeatherByCity(cityName: string): Observable<CityWeather>{
    return this.http.get<CityWeather>(`${environment.weatherUrl}?q=${cityName}&units=metric&appid=${environment.weatherSecret}`);
  }

}
