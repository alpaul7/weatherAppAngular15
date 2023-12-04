import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SearchBoxComponent } from './views/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { WeatherBoxComponent } from './views/weather-box/weather-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBoxComponent,
    WeatherBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
