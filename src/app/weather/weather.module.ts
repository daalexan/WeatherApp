import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
