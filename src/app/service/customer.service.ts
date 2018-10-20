import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Customer} from "../dtos/customer";
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';
import {map} from "rxjs-compat/operator/map";

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/customers";

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient,private router: Router) { }


  getTotalCustomer(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }

  getAllCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(MAIN_URL + URL);
  }

  deleteCustomer(id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + "/" + id);
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer);
  }

}
