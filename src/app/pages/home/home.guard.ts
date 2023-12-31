import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  isLogged!: boolean
  constructor(private auth: AuthService, private router:Router) {
    this.auth.loggedStatus.subscribe(res => this.isLogged = res)
  }
  canActivate() {
    if(!this.isLogged) {
      this.router.navigate(["/login"])
      return this.isLogged
    } else return this.isLogged;
  }
}
