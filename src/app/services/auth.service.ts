import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { Auth, User, lsAuth } from '../interfaces/user/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged$ = new BehaviorSubject<boolean>(true);
  loggedStatus = this.isLogged$.asObservable();
  loggedUser = new BehaviorSubject<User>({} as User)
  // url: string = environment['BE_URL'];
  jwtSrv = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.verifyLogin();
  }

  login(cred: FormData) {
    return this.http
      .post(`${environment['BE_URL']}login`, cred, {
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        tap((res) => {
          if (res.headers.get('token')) {
            this.setLocalStorage('weather-login', res.headers.get('token'));
            this.isLogged$.next(true);
            this.router.navigate(['/']);
          }
        })
      );
  }

  signup(cred: FormData) {
    return this.http
      .post(`${environment['BE_URL']}`, cred, { responseType: 'text' })
      .pipe(
        tap(() => {
          alert('User registered! Redirecting to home page...');
          this.router.navigate(['/']);
        })
      );
  }

  logout() {
    localStorage.removeItem('weather-login');
    console.log("not logged!")

    this.isLogged$.next(false);
    this.router.navigate(['/login']);
  }

  get getLoginData(): string | false {
    const ls = (localStorage.getItem('weather-login')!) as
      | string
      | null;
    if (ls) return ls;
    else return false;
  }

  verifyLogin() {
    const data = this.getLoginData;
    if (data) {
      console.log(data)
      this.http.get<User>(`${environment['BE_URL']}me`, {
        headers: {
          authorization: data,
        },
      }).subscribe(res => {
        this.loggedUser.next(res)
        this.isLogged$.next(true)
      })
    } else {
      this.isLogged$.next(false);
    }
  }

  private setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}
