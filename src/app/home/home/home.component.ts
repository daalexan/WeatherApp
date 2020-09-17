import { Component } from '@angular/core';

import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  public cityName: string;
  
  constructor(
    private weatherService: WeatherService
    ) { }

  public addCity() {
    this.weatherService.triggerChanged(this.cityName);
    this.cityName = undefined;
  }
}
