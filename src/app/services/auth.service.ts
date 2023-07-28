import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from "rxjs"


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged$ = new BehaviorSubject<boolean>(false);
  loggedStatus = this.isLogged$.asObservable();

  url: string = environment.BE_URL;
  jwtSrv = new JwtHelperService();

  constructor(private http: HttpClient) {

  }

  login(cred: Auth) {
    return this.http.post<lsAuth>(`${environment.BE_URL}login`, cred)
      .pipe(
        tap((res) => {
          if (res.accessToken) {
            this.setLocalStorage("weather-login", res.accessToken)
            this.isLogged$.next(res.accessToken ? true : false)
            //routing here
          } else {
            //error handling
          }
        })
      )
  }

  signup(cred: User) {
    return this.http.post<User>(`${environment.BE_URL}signup`, cred)
      .pipe(
        tap(() => {
          //show success message
          //route to login
        })
      )
  }


  logout() {
    localStorage.removeItem("user")
    this.isLogged$.next(false)
    //route to login
  }
  currentLoggedUsed(): Observable<User[]> | undefined {
    const dati = this.getLoginData
    if (dati) {
      const email = dati.user.email
      return this.http.get<User[]>(`${environment.BE_URL}users?email=${email}`)
    } else {
      this.isLogged$.next(false)
      return
    }
  }

  private get getLoginData() {
    const ls = JSON.parse(localStorage.getItem("user")!) as lsAuth | null
    if (ls) return ls
    else return false
  }

  verifyLogin() {
    const data = this.getLoginData
    if (data) {
      const isExpired = this.jwtSrv.isTokenExpired(data.accessToken!)
      this.isLogged$.next(!isExpired)
    } else {
      this.isLogged$.next(false)
    }
  }

  private setLocalStorage(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
