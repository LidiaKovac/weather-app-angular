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
import { RecentComponent } from './components/recent/recent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavsComponent } from './components/favs/favs.component';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RoundTempPipe,
    IconComponent,
    ConvertDtPipe,
    WeatherClassPipe,
    InputComponent,
    RecentComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FavsComponent
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
