import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundTempPipe } from './pipes/round-temp.pipe';
import { TileComponent } from './components/tile/tile.component';
import { IconComponent } from './components/icon/icon.component';
import { ConvertDtPipe } from './pipes/convert-dt.pipe';
import { FormsModule } from '@angular/forms';
import { WeatherClassPipe } from './pipes/weather-class.pipe';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { ListTileComponent } from './components/list-tile/list-tile.component';
import { SingleCityLiComponent } from './components/single-city-li/single-city-li.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RoundTempPipe,
    IconComponent,
    ConvertDtPipe,
    WeatherClassPipe,
    InputComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ListTileComponent,
    SingleCityLiComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
