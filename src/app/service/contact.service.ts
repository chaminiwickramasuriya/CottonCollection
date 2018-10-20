import { Injectable } from '@angular/core';
import {Contact} from "../dtos/contact";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/contacts";

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }


  saveContact(contact:Contact):Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,contact);
  }

  getSelectMessage(): Observable<Array<Contact>>{
    return this.http.get<Array<Contact>>(MAIN_URL + URL);
  }

  deleteContact(mailId: number): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + mailId);
  }
  //
  // getSelectImages(): Observable<Array<Contact>>{
  //   return this.http.get<Array<Contact>>(MAIN_URL + URL+"/" + imagePath);
  // }
}
