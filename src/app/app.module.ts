import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundTempPipe } from './pipes/round-temp.pipe';
import { TileComponent } from './components/tile/tile.component';
import { IconComponent } from './components/icon/icon.component';
import { ConvertDtPipe } from './pipes/convert-dt.pipe';
import { FormsModule } from '@angular/forms';
import { WeatherClassPipe } from './pipes/weather-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RoundTempPipe,
    IconComponent,
    ConvertDtPipe,
    WeatherClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
