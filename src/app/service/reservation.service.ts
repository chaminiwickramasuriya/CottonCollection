import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Orders} from "../dtos/orders";

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/reservations";

@Injectable()
export class ReservationService {

  constructor(private http:HttpClient, private router:Router) { }

  placeOrder(order: Orders): Observable<boolean>{
    console.log(order);
    return this.http.post<boolean>(MAIN_URL + URL,order);
  }
}
