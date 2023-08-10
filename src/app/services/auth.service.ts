import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from "rxjs"
import { Auth, User, lsAuth } from '../interfaces/user/user.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged$ = new BehaviorSubject<boolean>(false);
  loggedStatus = this.isLogged$.asObservable();

  url: string = environment["BE_URL"];
  jwtSrv = new JwtHelperService();

  constructor(private http: HttpClient, private router:Router) {
    this.verifyLogin()
  }

  login(cred: Auth) {
    return this.http.post<lsAuth>(`${environment["BE_URL"]}login`, cred)
      .pipe(
        tap((res) => {
          if (res.accessToken) {
            this.setLocalStorage("weather-login", res)
            this.isLogged$.next(res.accessToken ? true : false)
            //routing here
          } else {
            //error handling
          }
        })
      )
  }

  signup(cred: User) {
    return this.http.post<lsAuth | string>(`${environment["BE_URL"]}`, cred)
      .pipe(
        tap(() => {
          //show success message
          //route to login
        })
      )
  }


  logout() {
    localStorage.removeItem("weather-login")
    this.isLogged$.next(false)
    this.router.navigate(["/login"])
  }


  get getLoginData():lsAuth | false {
    const ls = JSON.parse(localStorage.getItem("weather-login")!) as lsAuth | null
    if (ls) return ls
    else return false
  }

  verifyLogin() {
    const data = this.getLoginData
    if (data && data.accessToken) {
      const isExpired = this.jwtSrv.isTokenExpired(data.accessToken)
      this.isLogged$.next(!isExpired)
    } else {
      this.isLogged$.next(false)
    }
  }

  private setLocalStorage(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
