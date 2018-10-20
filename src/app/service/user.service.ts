import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const URL= "api/v1/login";

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

   // constructor(private http:HttpClient, private router:Router) {
   //
   // }

   constructor(){ this.isUserLoggedIn=false;}
  //
  // login(user:User):Observable<User>{
  //   return this.http.post<User>(MAIN_URL +  URL, user)
  //     .pipe(
  //       map((result)=>{
  //         sessionStorage.setItem("token", JSON.stringify(result));
  //         if(result){
  //           this.router.navigate(['/admin-dashboard']);
  //         }
  //         return result;
  //       })
  //     )
  // }
  //
  // isAuthenticated():boolean{
  //   if(sessionStorage.getItem("token")){
  //     return sessionStorage.getItem("token")== 'false' ? false: true;
  //   }
  // }
  // logout(): void{
  //   sessionStorage.removeItem("token");
  //   this.router.navigate(['/login']);
  // }

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
