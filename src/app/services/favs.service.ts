import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, lsAuth } from '../interfaces/user/user.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavsService {
  private favs$ = new BehaviorSubject<User['favs']>([])
  favs = this.favs$.asObservable()
  constructor(private http: HttpClient, private auth: AuthService) {
    this.getFavs().subscribe()
  }

  getFavs(): Observable<User['favs']> {
    const {
      user: { _id },
    } = this.auth.getLoginData as lsAuth;
    return this.http.get<User>(environment["BE_URL"] + _id).pipe(
      map((res) => {
        this.favs$.next(res.favs)
        return res.favs;
      })
    );
  }
  addFav(city: string) {
    const {
      user: { _id },
    } = this.auth.getLoginData as lsAuth;

    const currentFavs = this.favs$.value
    return this.http.patch<User>(environment["BE_URL"] + _id, {
      favs: [...currentFavs, city],
    }
    ).pipe(tap(res => this.favs$.next(res.favs)))
  }
  removeFav(city: string) {
    const {
      user: { _id },
    } = this.auth.getLoginData as lsAuth;
    const currentFavs = this.favs$.value

    return this.http.patch<User>(environment["BE_URL"] + _id, {
      favs: currentFavs.filter((ct) => ct !== city),
    }).pipe(tap(res => this.favs$.next(res.favs)))
  }
}
