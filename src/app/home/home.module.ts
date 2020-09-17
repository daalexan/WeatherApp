import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';

import { WeatherService } from '../services/weather.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
  providers: [WeatherService]
})
export class HomeModule { }
