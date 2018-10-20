import { Injectable } from '@angular/core';
import {Category} from "../dtos/category";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Form} from "@angular/forms";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

export const MAIN_URL = "http://localhost:8080";
const URL="/api/v1/categories";
const ImageURL="/api/v1/categories/file";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getItem(catCode:String):Observable<boolean>{
    return this.http.get<boolean>(MAIN_URL + URL + "/" + catCode);
  }

  getAllCategories():Observable<Array<Category>>{
    return this.http.get<Array<Category>>(MAIN_URL + URL);
  }

  saveCategory(category: Category): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL +"/post", category);
  }

  deleteCategory(catCode:String):Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL + URL + "/" + catCode);
  }

  saveFile(file:FormData):Observable<boolean>{
    alert(file)
    return this.http.post<boolean>(MAIN_URL + ImageURL ,file);
  }

  getImage(path:string):Observable<Array<Category>>{
    return this.http.get<Array<Category>>(MAIN_URL+URL+"/"+path);
  }

  // getFile(path : String): Observable<HttpEvent<{}>>{
  //   return this.http.get<HttpEvent<{}>>(MAIN_URL + "/file" + path);
  // }

}


