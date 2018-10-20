import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Orders} from "../dtos/orders";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

// export const MAIN_URL= "http://localhost:8080";
// const URL="/api/v1/orders";

@Injectable()
export class OrdersService {

  constructor(private http:HttpClient, private router:Router) { }

  // getAllOrders():Observable<Array<Orders>>{
  //   return this.http.get<Array<Orders>>(MAIN_URL + URL);
  // }
}
