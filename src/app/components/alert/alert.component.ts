import { Component, OnInit } from '@angular/core';
import { ErrorsInterceptor } from 'src/app/interceptors/errors.interceptor';
import { ApiService } from 'src/app/services/api.service';
import { ErrorsService } from 'src/app/services/errors.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  error!: string
  constructor(private errorSrv: ErrorsService) {
    this.errorSrv.error.asObservable().subscribe(err => this.error = err)
  }

}
