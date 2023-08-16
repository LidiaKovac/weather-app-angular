import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  error = new BehaviorSubject<string>("")

  constructor() { }

  throw(msg: string, to: number) {
    this.error.next(msg)
    setTimeout(() => {
      this.error.next("")
    }, to)
  }

}
