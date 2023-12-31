import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';
import { ErrorsService } from "../services/errors.service";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private errorSrv:ErrorsService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map((res)=> {
      console.log(res)
      return res
    }), catchError((error: HttpErrorResponse) => {
      console.log("erro", error)
      this.errorSrv.throw(`Error! ${error.error} `, 2000)
      return throwError(() => new Error(error.message))
    }))
  }
}
