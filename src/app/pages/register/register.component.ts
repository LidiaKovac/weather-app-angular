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
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    favs: []
  }
  constructor(private auth: AuthService, private router: Router) { }

  register(ev: Event) {
    ev.preventDefault()
    const fd = new FormData(ev.target as HTMLFormElement)
    this.auth.signup(fd).subscribe()
  }


}
