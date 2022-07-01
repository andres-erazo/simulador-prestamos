import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endPoint } from 'src/environments/environment';
import { loanInformation } from './models/loan-information.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  url = `${endPoint.loanList}`

  constructor(private http: HttpClient) { }

  getList(): Observable<loanInformation []> {
    return this.http.get<loanInformation []>(this.url);
  }
}
