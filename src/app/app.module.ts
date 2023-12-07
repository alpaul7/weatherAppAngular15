import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SearchBoxComponent } from './views/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { WeatherBoxComponent } from './views/weather-box/weather-box.component';
import { ValueBoxComponent } from './components/value-box/value-box.component';
import { WindBoxComponent } from './views/wind-box/wind-box.component';
import { WindDirectionComponent } from './components/wind-direction/wind-direction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBoxComponent,
    WeatherBoxComponent,
    ValueBoxComponent,
    WindBoxComponent,
    WindDirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
