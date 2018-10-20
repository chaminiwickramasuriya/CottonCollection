import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../dtos/user";
import {Router} from "@angular/router";
import { FormGroup, FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user:User=new User();
  // failed:boolean;
  //
  // constructor(private  userService: UserService, private router: Router) { }
  //
  // ngOnInit() {
  //
  // }


  // login(e):void{
  //   e.preventDefault();
  //   console.log(e);
  //     var username=e.target.elements[0].value;
  //     var password=e.target.elements[1].value;
  //     console.log(username, password);
  //
  //     if(username == 'admin' && password == 'admin12'){
  //       this.userService.setUserLoggedIn();
  //       this.router.navigate(['/main/admin-dashboard']);
  //     }
  //     else {
  //       alert("UserName And Password Are Incorrect..");
  //       location.reload();
  //     }
  // }


  formdata;
  constructor(private router: Router) { }
  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      passWord: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {"passWord" : true};
    }
  }
  onClickSubmit(data) {
    console.log(data.userName);
    if (data.userName == "admin" && data.passWord == "admin12") {
      alert("Login Successful");
      this.router.navigate(['/main/admin-dashboard'])
    }else {
            alert("UserName And Password Are Incorrect..");
            location.reload();
          }
  }


}
