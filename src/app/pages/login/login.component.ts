import { Component, OnInit } from '@angular/core';
import { Auth } from "../../interfaces/user/user.interface"
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cred: Auth = {
    email: "",
    password: ""
  }
  constructor(private auth: AuthService, private router:Router) { }

  login(ev: Event) {
    ev.preventDefault()
    const fd = new FormData(ev.target as HTMLFormElement)
    this.auth.login(fd).subscribe(res => {
      if(res) {
        this.router.navigate(["/"])
        const target = ev.target as HTMLFormElement
        target.reset()
      }
    })
  }

}
