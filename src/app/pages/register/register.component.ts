import { Component, OnInit } from '@angular/core';
import { User, lsAuth } from 'src/app/interfaces/user/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    name: "",
    email: "",
    password: "",
    favs: []
  }
  constructor(private auth: AuthService, private router: Router) { }

  register(ev: Event) {
    ev.preventDefault()
    this.auth.signup(this.user).subscribe((res) => {

      if (typeof res !== 'string' && res.accessToken) {
        alert("User registered! Redirecting to home page...")
        this.router.navigate(["/"])
      }
    })
  }


}
