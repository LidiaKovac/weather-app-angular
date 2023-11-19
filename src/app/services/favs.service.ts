import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, lsAuth } from '../interfaces/user/user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavsService {
  private favs$ = new BehaviorSubject<User['favs']>([]);
  favs = this.favs$.asObservable();
  constructor(private http: HttpClient, private auth: AuthService) {
    this.getFavs().subscribe();
  }

  getFavs() {
        return this.http.get<User>(environment['BE_URL'] + "me", {
          headers: {
            authorization: localStorage.getItem("weather-login") as string
          }
        }).pipe(
          map((res) => {
            this.favs$.next(res.favs);
            return res.favs;
          })
        );
  }
  addFav(city: string) {
    return this.auth.loggedUser.asObservable().pipe(
      switchMap((user) => {
        const currentFavs = this.favs$.value;
        return this.http
        .patch<User>(environment['BE_URL'] + "favs/" + city + "/add", null, {
          headers: {
            authorization: localStorage.getItem("weather-login") as string
          }
        })
      }),
      map((user) => {
        this.favs$.next(user.favs)
      })
    );
  }
  removeFav(city: string) {
        const currentFavs = this.favs$.value;

        return this.http
          .patch<User>(environment['BE_URL'] + "favs/" + city + "/remove", null, {
            headers: {
              authorization: localStorage.getItem("weather-login") as string
            }
          })
          .pipe(tap((res) => this.favs$.next(res.favs)));
  }
}
