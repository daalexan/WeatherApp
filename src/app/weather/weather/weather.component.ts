import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CityWeather } from 'src/app/models/city-weather.model';

import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private unsubscribe$: Subject<any> = new Subject<any>();
  public weatherList: Array<CityWeather> = [];
  public isLoading = false;

  constructor(
    private weatherService: WeatherService
    ) { }

  ngOnInit(): void {
    this.weatherService.weatherTrigger$.pipe(
      takeUntil(this.unsubscribe$)
      ).subscribe(x => this.getWeatherByCity(x));
    const weatherListCached: Array<CityWeather> = JSON.parse(localStorage.getItem('weatherList'));
    if(weatherListCached){
      this.weatherList = weatherListCached;
    }
  }

  public getWeatherByCity(cityName: string) {
    this.isLoading = true;
    this.weatherService.getWeatherByCity(cityName).subscribe(
      x => {
        this.weatherList.push(x);
        this.isLoading = false;
        this.saveLocalstorage();
      },
      e => {
        this.isLoading = false;
        alert("Invalid city name");
      });
  }

  public removeWeather(weatherItem: CityWeather) {
    this.weatherList = this.weatherList.filter(x => x !== weatherItem);
    this.saveLocalstorage();
  }

  private saveLocalstorage(){
    localStorage.setItem('weatherList', JSON.stringify(this.weatherList));
  }
}
