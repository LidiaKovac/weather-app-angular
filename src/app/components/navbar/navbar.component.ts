import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogged!: boolean
  constructor(private auth:AuthService) {
    this.auth.loggedStatus.subscribe(res => this.isLogged = res)
  }

 logout() {
  this.auth.logout()
 }
}
